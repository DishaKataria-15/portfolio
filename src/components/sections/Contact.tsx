import { useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import { profile, socials } from "../../data/profile";
import { Panel, SectionHeader } from "../ui/Section";
import { SocialIcon } from "../ui/SocialIcon";
import { QuillAndInk } from "../art/Decor";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="h-full">
      <Panel className="flex h-full flex-col p-6 sm:p-9">
        <SectionHeader id="contact" index="07" title="Let's Connect" />
        <p className="mt-4 text-[15px] leading-relaxed text-parchment/80">
          Always open to new opportunities, collaborations and conversations about AI/ML, data science and data engineering.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Profiles">
          {socials.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-night-950/60 px-3.5 py-2 text-[13.5px] text-parchment transition hover:border-gold-400/50 hover:text-gold-200"
              >
                <SocialIcon id={s.id} />
                {s.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary group">
            Send a Message
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1.5 text-[13px] text-mist transition hover:text-gold-200">
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied ? "Copied" : "Copy email"}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </div>
        <p className="mt-3 break-all font-mono text-[12.5px] text-mist">{profile.email}</p>

        <div className="relative mt-auto flex justify-end pt-6">
          <QuillAndInk className="w-40 sm:w-48" />
        </div>
      </Panel>
    </section>
  );
}
