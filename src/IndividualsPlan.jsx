// src/IndividualsHero.jsx
import React, { useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import IndemnityPlan from './IndemnityPlan';
import KeyFeatures from './KeyFeatures';
import HowItWorks from './HowitworksIndividual';
import WhyChooseIndemnity from "./WhyChooseIndemnity";
import RightForYouCompare from "./RightForYouCompare";
import CustomerStories from "./CustomerStories";
import FaqIndividuals from "./FaqIndividuals";
import LegalDisclosures from "./LegalDisclosures";
/* Image lives in public/Images */
const ILLUSTRATION = "/Images/healthinsurance.png";

/* Motion helpers */
const container = (r) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: r ? 0 : 0.12 } },
});
const item = (r) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: r ? 0 : 0.5, ease: "easeOut" } },
});
const float = (r, amp = 8, dur = 7) =>
  r ? {} : { y: [0, -amp, 0], transition: { duration: dur, repeat: Infinity, ease: "easeInOut" } };

/* UI bits */
const CheckIcon = (p) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M7.5 13.5 3.6 9.6l1.4-1.4 2.5 2.5 7.5-7.5L16.9 5 7.5 13.5z" />
  </svg>
);

const Pill = ({ children, delay = 0, tone = "indigo" }) => {
  const reduced = useReducedMotion();
  const tones = {
    indigo: "from-indigo-600 to-sky-600",
    emerald: "from-emerald-600 to-teal-600",
    violet: "from-fuchsia-600 to-violet-600",
  };
  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200"
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      animate={float(reduced, 4, 6)}
      transition={{ delay }}
    >
      <span className={`grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full bg-gradient-to-r ${tones[tone]} text-white`}>
        <CheckIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
      </span>
      {children}
    </motion.div>
  );
};

export default function IndividualsHero({
  /* used as small centered illustration (not a bg) */
  bgUrl = ILLUSTRATION,
  onCtaClick,
  className = "",
}) {
  const reduced = useReducedMotion();
  const artUrl = useMemo(() => encodeURI(bgUrl).replace(/%5C/g, "/"), [bgUrl]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = artUrl;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, [artUrl]);

  return (
    <>
    <section
      data-qa="individuals-hero"
      aria-labelledby="hero-title"
      className={`relative overflow-hidden ${className}`}
    >
      {/* --- NEW: image-inspired background --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-sky-50" />
      {/* soft color glows (umbrella pink + kit blue) */}
      <div className="pointer-events-none absolute -top-32 -left-28 h-96 w-96 rounded-full bg-fuchsia-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-sky-400/25 blur-3xl" />
      {/* gentle tint for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 via-indigo-700/10 to-sky-600/10" />
      {/* tiny dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='1' cy='1' r='1' fill='%2394a3b8'/%3E%3C/svg%3E\")",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={container(reduced)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid min-h-[72vh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:min-h-[78vh] lg:grid-cols-2 lg:py-20"
      >
        {/* LEFT — copy with adjusted colors for the new bg */}
        <div>
          <motion.div
            variants={item(reduced)}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 ring-1 ring-slate-200"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Individual Health Plans
          </motion.div>

          {/* Dark-to-color gradient title for strong contrast on the tinted bg */}
          <motion.h1
            id="hero-title"
            variants={item(reduced)}
            className="mt-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl lg:text-6xl"
          >
            Affordable Health Coverage That Pays You Cash.
          </motion.h1>

          <motion.p
            variants={item(reduced)}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl"
          >
            Lower premiums, no deductibles, and the freedom to keep your doctor.
          </motion.p>

          <motion.div variants={item(reduced)} className="mt-8">
            <a
              href="#quote"
              role="button"
              onClick={onCtaClick}
              data-qa="cta-quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fuchsia-500"
            >
              Get a Free Quote
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 4l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* RIGHT — centered, slightly larger floating image between pills */}
        <div className="relative mx-auto w-full max-w-[560px]">
          {/* centered image (no bg) */}
          <motion.img
            src={artUrl}
            alt="Health insurance"
            className="pointer-events-none absolute inset-0 z-10 m-auto w-60 sm:w-72 lg:w-80 select-none object-contain drop-shadow-md"
            loading="eager"
            decoding="async"
            animate={float(reduced, 10, 7.5)}
          />

          {/* Pill anchors */}
          <div className="relative aspect-[4/3] w-full max-w-[520px]">
            <div className="absolute left-0 top-2">
              <Pill tone="emerald" delay={0.1}>$0 Copays</Pill>
            </div>
            <div className="absolute right-0 top-0">
              <Pill tone="indigo" delay={0.2}>Keep Your Doctor</Pill>
            </div>
            <div className="absolute left-2 bottom-2">
              <Pill tone="violet" delay={0.3}>Fast Claims</Pill>
            </div>
            <div className="absolute right-0 bottom-3">
              <Pill tone="emerald" delay={0.4}>No Deductibles</Pill>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    <IndemnityPlan/>
    <KeyFeatures/>
    <HowItWorks/>
    <WhyChooseIndemnity/>
    <RightForYouCompare/>
    <CustomerStories/>
    <FaqIndividuals/>
    <LegalDisclosures/>
    </>
  );
}
