import Image from "next/image";

type HeroPortraitProps = {
  /** `hero`: home layout (right column). `about`: centered, smaller, no LCP priority. */
  variant?: "hero" | "about";
};

const wrapperClass: Record<NonNullable<HeroPortraitProps["variant"]>, string> = {
  hero: "relative w-full max-w-[min(100%,340px)] justify-self-center lg:max-w-[420px] lg:justify-self-end",
  about:
    "relative mx-auto w-full max-w-[min(100%,260px)] sm:max-w-[300px] md:max-w-[320px]",
};

export function HeroPortrait({ variant = "hero" }: HeroPortraitProps) {
  const isAbout = variant === "about";

  return (
    <div className={wrapperClass[variant]}>
      <div className="hero-portrait-blend relative aspect-[4/5] w-full">
        <Image
          src="/minime.png"
          alt="Ron"
          fill
          className="object-cover object-center opacity-90 saturate-[0.9]"
          priority={!isAbout}
          sizes={
            isAbout
              ? "(max-width: 640px) 260px, 320px"
              : "(max-width: 1024px) 340px, 420px"
          }
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06040c]/50 via-transparent to-[#06040c]/75"
          aria-hidden
        />
      </div>
    </div>
  );
}
