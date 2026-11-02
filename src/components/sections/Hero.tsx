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
          {/* Illustration: full-bleed on the right on desktop; on phones it sits below the text so the facts come first */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: EASE }}
            className="relative order-last aspect-[16/10] overflow-hidden sm:aspect-[640/440] lg:aspect-auto"
          >
            <HeroScene className="absolute inset-0 h-full w-full" />
            {/* fade into the text column */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-night-900 via-transparent to-transparent lg:bg-[linear-gradient(90deg,#080c1a_0%,rgba(8,12,26,0.55)_14%,rgba(8,12,26,0)_32%)]"
            />
          </motion.div>

          <div className="relative z-10 flex flex-col justify-center px-5 pb-6 pt-6 sm:px-10 sm:pb-9 lg:py-12 lg:pl-12 lg:pr-4">
            <motion.div {...rise(0.1)} className="hidden sm:block">
              <OctBadge n="01" />
            </motion.div>
            {/* The facts a screener needs, before any flourish */}
            <motion.p {...rise(0.15)} className="text-[15px] leading-snug sm:mt-6">
              <strong className="font-semibold text-parchment">{profile.name}</strong>
              <span className="mt-0.5 block text-[13.5px] text-parchment/75">
                {profile.roleLine}
              </span>
            </motion.p>
            <motion.p
              {...rise(0.2)}
              className="mt-3 inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3 py-1 text-[12.5px] text-emerald-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {profile.status}
            </motion.p>
            <motion.p {...rise(0.25)} className="mt-5 font-serif text-lg italic text-parchment/90 sm:mt-6 sm:text-2xl">
              {profile.welcome}
            </motion.p>
            <motion.h1
              {...rise(0.3)}
              id="home-heading"
              className="mt-1 font-serif text-[2.35rem] font-semibold leading-[1] text-gold-200 sm:text-6xl xl:text-[4.25rem]"
            >
              {profile.heroTitle[0]}
              <br />
              <span className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                {profile.heroTitle[1]}
              </span>
            </motion.h1>
            <motion.p {...rise(0.4)} className="mt-3 font-serif text-lg leading-snug text-gold-300 sm:mt-4 sm:text-2xl">
              {profile.tagline}
            </motion.p>
            <motion.p {...rise(0.5)} className="mt-4 hidden max-w-md text-[15px] leading-relaxed text-parchment/80 sm:block sm:text-base">
              I'm {profile.heroIntro}
            </motion.p>

            <motion.div {...rise(0.55)} className="mt-6 flex flex-wrap gap-3 sm:mt-7">
              <a href="#projects" className="btn-primary group">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>

            <motion.div {...rise(0.6)} className="mt-6 flex flex-wrap items-center gap-5 sm:mt-7">
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
              <a href="#about" className="hidden items-center gap-2 text-[13px] text-mist transition hover:text-gold-200 sm:inline-flex">
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
