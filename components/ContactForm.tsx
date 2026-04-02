"use client";

import { useState } from "react";
import type { ContactFormCopy } from "@/content/home-locale";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/20";

const labelClass = "block text-sm font-medium text-slate-300";

type ContactFormProps = {
  copy: ContactFormCopy;
  className?: string;
};

export function ContactForm({ copy, className = "" }: ContactFormProps) {
  const [projectDescription, setProjectDescription] = useState("");
  const [businessDetails, setBusinessDetails] = useState("");
  const [priceOffer, setPriceOffer] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectDescription,
          businessDetails,
          priceOffer,
          clientEmail,
          company: honeypot,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? copy.errGeneric);
        return;
      }

      setStatus("success");
      setMessage(copy.success);
      setProjectDescription("");
      setBusinessDetails("");
      setPriceOffer("");
      setClientEmail("");
    } catch {
      setStatus("error");
      setMessage(copy.errNetwork);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto w-full max-w-2xl space-y-8 ${className}`}
    >
      <div className="hidden" aria-hidden>
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="projectDescription" className={labelClass}>
          {copy.describeLabel}
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          required
          rows={5}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder={copy.describePlaceholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="businessDetails" className={labelClass}>
          {copy.businessLabel}
        </label>
        <textarea
          id="businessDetails"
          name="businessDetails"
          required
          rows={4}
          value={businessDetails}
          onChange={(e) => setBusinessDetails(e.target.value)}
          placeholder={copy.businessPlaceholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="priceOffer" className={labelClass}>
          {copy.priceLabel}
        </label>
        <textarea
          id="priceOffer"
          name="priceOffer"
          rows={3}
          value={priceOffer}
          onChange={(e) => setPriceOffer(e.target.value)}
          placeholder={copy.pricePlaceholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="clientEmail" className={labelClass}>
          {copy.emailLabel}
        </label>
        <input
          id="clientEmail"
          name="clientEmail"
          type="email"
          required
          autoComplete="email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          placeholder={copy.emailPlaceholder}
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {message}
        </p>
      )}
      {status === "success" && (
        <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="cta-primary w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
      >
        {status === "sending" ? copy.sending : copy.send}
      </button>
    </form>
  );
}
