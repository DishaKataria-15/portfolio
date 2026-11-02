import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile, socials } from "../../data/profile";
import { SocialIcon } from "../ui/SocialIcon";
import { OctBadge, Panel } from "../ui/Section";
import { HeroScene } from "../art/HeroScene";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion() ?? false;
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section id="home" aria-labelledby="home-heading" className="relative pb-4 pt-24 sm:pb-5 sm:pt-28">
      <div className="container-page">
        <Panel className="grid lg:min-h-[36rem] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Illustration: full-bleed on the right on desktop, banner on top on mobile */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: EASE }}
            className="relative order-first aspect-[640/520] overflow-hidden lg:order-last lg:aspect-auto"
          >
            <HeroScene className="absolute inset-0 h-full w-full" />
            {/* fade into the text column */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-night-900 via-transparent to-transparent lg:bg-[linear-gradient(90deg,#080c1a_0%,rgba(8,12,26,0.55)_14%,rgba(8,12,26,0)_32%)]"
            />
          </motion.div>

          <div className="relative z-10 flex flex-col justify-center px-6 pb-9 pt-2 sm:px-10 lg:py-12 lg:pl-12 lg:pr-4">
            <motion.div {...rise(0.1)}>
              <OctBadge n="01" />
            </motion.div>
            <motion.p {...rise(0.2)} className="mt-6 font-serif text-xl italic text-parchment/90 sm:text-2xl">
              {profile.welcome}
            </motion.p>
            <motion.h1
              {...rise(0.3)}
              id="home-heading"
              className="mt-1 font-serif text-[2.8rem] font-semibold leading-[1] text-gold-200 sm:text-6xl xl:text-[4.25rem]"
            >
              <span className="sr-only">{profile.name}: </span>
              {profile.heroTitle[0]}
              <br />
              <span className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                {profile.heroTitle[1]}
              </span>
            </motion.h1>
            <motion.p {...rise(0.4)} className="mt-4 font-serif text-xl leading-snug text-gold-300 sm:text-2xl">
              {profile.tagline}
            </motion.p>
            <motion.p {...rise(0.5)} className="mt-4 max-w-md text-[15px] leading-relaxed text-parchment/80 sm:text-base">
              I'm <strong className="font-semibold text-parchment">{profile.name}</strong>, {profile.heroIntro}
            </motion.p>

            <motion.p
              {...rise(0.55)}
              className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3 py-1 text-[12.5px] text-emerald-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {profile.status}
            </motion.p>

            <motion.div {...rise(0.6)} className="mt-7 flex flex-wrap gap-3">
              <a href="#about" className="btn-primary group">
                Explore My World
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </motion.div>

            <motion.div {...rise(0.7)} className="mt-7 flex flex-wrap items-center gap-5">
              <ul className="flex items-center gap-2" aria-label="Profiles">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-mist transition hover:border-gold-400/50 hover:text-gold-200"
                      aria-label={`${s.label} profile (opens in a new tab)`}
                    >
                      <SocialIcon id={s.id} />
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#about" className="inline-flex items-center gap-2 text-[13px] text-mist transition hover:text-gold-200">
                <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
                Scroll to begin your journey
              </a>
            </motion.div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
