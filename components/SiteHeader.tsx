import Link from "next/link";

const linkClass =
  "text-sm font-medium text-slate-400 transition-colors hover:text-fuchsia-300";

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-violet-500/15 bg-[#06040c]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className={`font-[family-name:var(--font-mono)] text-sm tracking-tight text-slate-200`}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {"// "}
          </span>
          ron.dev
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-8"
          aria-label="Main"
        >
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/about" className={linkClass}>
            About
          </Link>
          <Link href="/#projects" className={linkClass}>
            Projects
          </Link>
          <Link href="/#contact" className={linkClass}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
