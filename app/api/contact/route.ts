import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "poznerron2@gmail.com";

const MAX_LEN = 8000;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type Body = {
  projectDescription?: string;
  businessDetails?: string;
  priceOffer?: string;
  clientEmail?: string;
  company?: string;
};

function buildMailParts(
  clientEmail: string,
  projectDescription: string,
  businessDetails: string,
  priceOffer: string,
) {
  const html = `
    <h2 style="font-family:sans-serif">New portfolio / web project request</h2>
    <p style="font-family:sans-serif"><strong>From (reply-to):</strong> ${escapeHtml(clientEmail)}</p>
    <h3 style="font-family:sans-serif">What they want on the web</h3>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(projectDescription)}</p>
    <h3 style="font-family:sans-serif">Business details</h3>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(businessDetails)}</p>
    <h3 style="font-family:sans-serif">Price / budget offer</h3>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(priceOffer || "(not provided)")}</p>
  `;

  const text = [
    `From: ${clientEmail}`,
    "",
    "What they want on the web:",
    projectDescription,
    "",
    "Business details:",
    businessDetails,
    "",
    "Price / budget offer:",
    priceOffer || "(not provided)",
  ].join("\n");

  return { html, text };
}

const CONFIG_HELP =
  "Add RESEND_API_KEY to .env.local (easiest — see https://resend.com/api-keys), or use Gmail: SMTP_USER + SMTP_PASS (App Password). See .env.example in the project.";

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const projectDescription = (body.projectDescription ?? "").trim();
  const businessDetails = (body.businessDetails ?? "").trim();
  const priceOffer = (body.priceOffer ?? "").trim();
  const clientEmail = (body.clientEmail ?? "").trim();

  if (!projectDescription || !businessDetails || !clientEmail) {
    return NextResponse.json(
      { error: "Please fill in description, business details, and your email." },
      { status: 400 },
    );
  }

  if (!isValidEmail(clientEmail)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  for (const [label, val] of [
    ["Project description", projectDescription],
    ["Business details", businessDetails],
    ["Price / budget", priceOffer],
  ] as const) {
    if (val.length > MAX_LEN) {
      return NextResponse.json({ error: `${label} is too long.` }, { status: 400 });
    }
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  if (!resendKey && (!smtpUser || !smtpPass)) {
    return NextResponse.json({ error: `Email not configured. ${CONFIG_HELP}` }, { status: 503 });
  }

  const { html, text } = buildMailParts(
    clientEmail,
    projectDescription,
    businessDetails,
    priceOffer,
  );

  const subject = `Web project request from ${clientEmail}`;

  try {
    if (resendKey) {
      const resend = new Resend(resendKey);
      const from =
        process.env.RESEND_FROM?.trim() ?? "Portfolio <onboarding@resend.dev>";
      const { error } = await resend.emails.send({
        from,
        to: TO_EMAIL,
        replyTo: clientEmail,
        subject,
        html,
        text,
      });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          {
            error:
              "Could not send via Resend. Check RESEND_API_KEY and that `to` matches your Resend account rules (onboarding@resend.dev only sends to your signup email).",
          },
          { status: 502 },
        );
      }
    } else {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: smtpUser, pass: smtpPass },
      });
      await transporter.sendMail({
        from: smtpUser,
        to: TO_EMAIL,
        replyTo: clientEmail,
        subject,
        text,
        html,
      });
    }
  } catch (e) {
    console.error("Contact mail error:", e);
    return NextResponse.json(
      { error: "Could not send email. Check your .env.local settings and try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
