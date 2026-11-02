import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = navItems.map((n) => n.id);

/** Floating pill navigation, as in the design. */
export function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-0 focus:z-50 focus:rounded-md focus:bg-gold-400 focus:px-3 focus:py-2 focus:text-night-950"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-2 rounded-full border border-gold-400/35 bg-night-950/80 pl-3 pr-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur-lg lg:justify-center lg:gap-4 lg:px-3"
      >
        <a href="#home" className="group flex items-center gap-2 rounded-full px-2" aria-label={`${profile.name}, back to top`}>
          <span className="font-serif text-2xl font-semibold tracking-wide text-gold-300 transition group-hover:text-gold-200">{profile.initials}</span>
          <span className="font-serif text-base text-parchment lg:hidden">{profile.name}</span>
        </a>
        <span aria-hidden="true" className="hidden h-6 w-px bg-gold-400/30 lg:block" />

        <ul className="hidden items-center lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-full px-2.5 py-1.5 text-[13px] transition ${isActive ? "text-gold-200" : "text-parchment/70 hover:text-parchment"}`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2.5 -bottom-0.5 h-px bg-gold-400 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-parchment transition hover:border-gold-400/50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-4xl rounded-2xl border border-gold-400/30 bg-night-950/95 p-3 backdrop-blur-lg lg:hidden"
      >
        <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
          {navItems.map((item, i) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition ${
                    isActive ? "bg-gold-400/10 text-gold-200" : "text-mist hover:bg-white/5 hover:text-parchment"
                  }`}
                >
                  <span className="font-mono text-[10px] text-gold-400/70">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
