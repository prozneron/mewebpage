import type { Metadata } from "next";
import { HeroPortrait } from "@/components/HeroPortrait";

export const metadata: Metadata = {
  title: "אודות — רון",
  description: "רקע, סיפור ומה שאני עושה.",
};

export default function AboutPage() {
  return (
    <main className="pt-14" dir="rtl" lang="he">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 20% 0%, rgba(139, 92, 246, 0.2), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 30%, rgba(236, 72, 153, 0.12), transparent 50%), radial-gradient(ellipse 60% 45% at 50% 100%, rgba(34, 211, 238, 0.1), transparent 55%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12 lg:gap-16">
            <div className="min-w-0 flex-1">
              <p
                className={`font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-transparent uppercase bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text`}
              >
                אודות
              </p>
              <h1
                className={`mt-3 font-[family-name:var(--font-rubik)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl`}
              >
                הסיפור שלי
              </h1>
            </div>
            <div className="shrink-0 md:pt-1">
              <HeroPortrait variant="about" />
            </div>
          </div>

          <div
            className={`font-[family-name:var(--font-rubik)] mt-12 space-y-10 text-right md:mt-14`}
          >
            <p className="text-2xl leading-relaxed font-medium text-slate-100 sm:text-3xl md:text-4xl">
              מגיל קטן אהבתי את מקצועות המחשב והתכנות
            </p>
            <p className="text-xl leading-relaxed text-slate-300 sm:text-2xl md:text-3xl">
              עם 3 שפות תכנות ואהבה עמוקה למחשב
            </p>
          </div>

          <div className="mt-16 space-y-8 border-t border-white/10 pt-16">
            <p className="text-xl font-semibold text-white sm:text-2xl">אני מתכנת.</p>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
              אני אוהב לבנות דברים שחיים ברשת—ממשקים נקיים, הנדסה יציבה, ואתרים
              שעוזרים לאנשים ולעסקים להופיע ברשת בביטחון.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
              <span className="font-medium text-slate-200">העסק שלך ברשת.</span> בין אם
              זה האתר הראשון שלך ובין אם נוכחות מחודדת יותר, אני מתמקד בבהירות,
              במהירות ובתוצאה שאפשר באמת להשתמש בה ולגדול איתה.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
              אפשר להוסיף כאן בהמשך ציר זמן, טכנולוגיות, או תמונות נוספות.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
