import type { ReactNode } from "react";

export type HomeLocale = "en" | "he";

export const HOME_LOCALE_STORAGE = "webofcur-home-locale";

export type ContactFormCopy = {
  describeLabel: string;
  describePlaceholder: string;
  businessLabel: string;
  businessPlaceholder: string;
  priceLabel: string;
  pricePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  send: string;
  sending: string;
  success: string;
  errGeneric: string;
  errNetwork: string;
};

export type HomeCopy = {
  heroAria: string;
  offerAria: string;
  eyebrow: string;
  titleDev: string;
  titleCreator: string;
  programmerLine: string;
  intro: ReactNode;
  businessLead: string;
  businessRest: string;
  ctaProjects: string;
  ctaContact: string;
  scroll: string;
  card1Label: string;
  card1Title: string;
  card1Body: string;
  card2Label: string;
  card2Title: string;
  card2Body: string;
  projectsTitle: string;
  projectsBody: string;
  contactTitle: string;
  contactBody: string;
  contactForm: ContactFormCopy;
};

/** Tech names stay Latin inside Hebrew sentences */
export const homeCopy: Record<HomeLocale, HomeCopy> = {
  en: {
    heroAria: "Introduction",
    offerAria: "What I offer",
    eyebrow: "Portfolio / 2026",
    titleDev: "Full-Stack Developer",
    titleCreator: " & Web Creator",
    programmerLine: "I'm a programmer.",
    intro: (
      <>
        I design and ship the web: interfaces, apps, and experiences in{" "}
        <span className="font-medium text-cyan-300">Next.js</span>,{" "}
        <span className="font-medium text-violet-300">React</span>, and{" "}
        <span className="font-medium text-fuchsia-300">modern CSS</span>—with a sharp
        eye for motion, accessibility, and speed.
      </>
    ),
    businessLead: "Your business on the web.",
    businessRest:
      "Need a site that represents you, brings in customers, and just works? I build professional websites and web apps tailored to what you do.",
    ctaProjects: "View my projects",
    ctaContact: "Contact",
    scroll: "Scroll",
    card1Label: "For you",
    card1Title: "Your own business on the web",
    card1Body:
      "Landing pages, portfolios, and small business sites—clear messaging, fast load times, and a look that fits your brand.",
    card2Label: "How I work",
    card2Title: "I'm a programmer",
    card2Body:
      "Real code, real products—not just templates. I care about structure, performance, and details you can build on later.",
    projectsTitle: "Projects",
    projectsBody:
      "Featured work will live here. Replace this block when you are ready to showcase builds.",
    contactTitle: "Contact",
    contactBody: "Fill this in and hit Send — it goes straight to my inbox.",
    contactForm: {
      describeLabel: "Describe the website or product you want",
      describePlaceholder:
        "e.g. A landing page for my café with menu and opening hours…",
      businessLabel: "Business details",
      businessPlaceholder:
        "Business name, what you do, location, links — anything that helps me understand the context.",
      priceLabel: "Price / budget offer",
      pricePlaceholder:
        "Rough range or what you’re comfortable investing — helps me reply with a realistic offer.",
      emailLabel: "Your email (I’ll reply here)",
      emailPlaceholder: "you@example.com",
      send: "Send",
      sending: "Sending…",
      success: "Sent. I’ll get back to you by email.",
      errGeneric: "Something went wrong.",
      errNetwork: "Network error. Check your connection and try again.",
    },
  },
  he: {
    heroAria: "הקדמה",
    offerAria: "מה אני מציע",
    eyebrow: "פורטפוליו / 2026",
    titleDev: "מפתח פול־סטאק",
    titleCreator: "ויוצר אתרים",
    programmerLine: "אני מתכנת.",
    intro: (
      <>
        אני מתכנן ובונה לרשת: ממשקים, אפליקציות וחוויות ב־
        <span className="font-medium text-cyan-300">Next.js</span>,{" "}
        <span className="font-medium text-violet-300">React</span> ו־
        <span className="font-medium text-fuchsia-300">CSS מודרני</span>
        —עם דגש על תנועה, נגישות וביצועים.
      </>
    ),
    businessLead: "העסק שלך ברשת.",
    businessRest:
      "צריך אתר שמייצג אותך, מביא לקוחות ופשוט עובד? אני בונה אתרים ואפליקציות מקצועיות שמותאמות למה שאתם עושים.",
    ctaProjects: "לפרויקטים שלי",
    ctaContact: "צור קשר",
    scroll: "גלול",
    card1Label: "בשבילך",
    card1Title: "העסק שלך ברשת",
    card1Body:
      "דפי נחיתה, תיקי עבודה ואתרים לעסקים קטנים—מסר ברור, טעינה מהירה ומראה שמתאים למותג.",
    card2Label: "איך אני עובד",
    card2Title: "אני מתכנת",
    card2Body:
      "קוד אמיתי, מוצרים אמיתיים—לא רק תבניות. אכפת לי ממבנה, מביצועים ומפרטים שאפשר לבנות עליהם בהמשך.",
    projectsTitle: "פרויקטים",
    projectsBody:
      "כאן יופיעו עבודות נבחרות. אפשר לעדכן את הבלוק הזה כשתרצה להציג פרויקטים.",
    contactTitle: "צור קשר",
    contactBody: "מלא את הטופס ולחץ שליחה — זה מגיע ישירות אליי למייל.",
    contactForm: {
      describeLabel: "תאר את האתר או המוצר שאתה רוצה",
      describePlaceholder: "למשל: דף נחיתה למסעדה עם תפריט ושעות פתיחה…",
      businessLabel: "פרטי העסק",
      businessPlaceholder: "שם העסק, מה אתם עושים, מיקום, קישורים — כל מה שעוזר להבין את ההקשר.",
      priceLabel: "הצעת מחיר / תקציב",
      pricePlaceholder: "טווח משוער או מה שנוח לך להשקיע — כדי שאוכל להציע משהו ריאלי.",
      emailLabel: "המייל שלך (אחזור אליך לכאן)",
      emailPlaceholder: "you@example.com",
      send: "שליחה",
      sending: "שולח…",
      success: "נשלח. אחזור אליך במייל.",
      errGeneric: "משהו השתבש.",
      errNetwork: "בעיית רשת. בדוק חיבור ונסה שוב.",
    },
  },
};
