import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.07] py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-center text-sm text-mist sm:flex-row sm:text-left">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-serif text-base italic text-gold-200/80">Always learning, always building.</p>
      </div>
    </footer>
  );
}
