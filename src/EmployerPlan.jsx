// src/EmployerPlan.jsx
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HowItWorks from './HowItWorks';
import WhatEmployeesGet from './WhatEmployeesGet';
import WhatEmployersgain from './WhatEmployersGain';
import ProgramsFeatures from './ProgramsFeatures';
import SavingCalculator from './SavingCalculator';
import RealWordResults from './RealWorldResults';
import ScoredForm from './ScorecardForm';
import FAQ from './FAQs';
import CaR from './ComplianceAndRequlatory';
/** Put the image at public/images/health-insurance-hero.jpg (or rename below) */
const BG_URL = "/images/health-insurance-hero.jpg";

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400" />
    {children}
  </span>
);

export default function EmployerHero() {
  const prefersReducedMotion = useReducedMotion();

  // Parallax for the background image
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useTransform(mx, [-60, 60], [-8, 8]);
  const py = useTransform(my, [-60, 60], [-6, 6]);

  useEffect(() => {
    if (prefersReducedMotion) {
      mx.set(0);
      my.set(0);
    }
  }, [prefersReducedMotion, mx, my]);

  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    mx.set(Math.max(-60, Math.min(60, x / 4)));
    my.set(Math.max(-60, Math.min(60, y / 4)));
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: prefersReducedMotion ? 0 : 0.16 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" } },
  };

  return (
    <>
    <section
      className="relative min-h-[88vh] overflow-hidden"
      aria-labelledby="employer-hero-title"
      onMouseMove={onMouseMove}
    >
      {/* Background image (dimmed a bit) */}
      <div className="absolute inset-0 -z-20">
        <motion.img
          src={BG_URL}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover [filter:brightness(.6)_saturate(.95)]"
          style={{ x: px, y: py }}
          animate={
            prefersReducedMotion ? {} : { scale: [1, 1.05, 1], x: [0, 4, 0], y: [0, -3, 0] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Blue tint overlays (strong but tasteful) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Multiply tint to push a blue cast across the photo */}
        <div className="absolute inset-0 bg-sky-900/70 mix-blend-multiply" />
        {/* Soft radial glow top-left */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,theme(colors.indigo.900/55),transparent_60%)]" />
        {/* Left-to-right scrim for copy legibility (slightly animated) */}
        <motion.div
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-sky-950/70 via-sky-900/45 to-sky-900/15"
          animate={prefersReducedMotion ? {} : { opacity: [0.9, 0.98, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid min-h-[88vh] grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* LEFT: Copy */}
          <header className="text-white">
            <motion.div variants={item} className="mb-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                Employer Plan
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400" />
              </span>
            </motion.div>

            <motion.h1
              id="employer-hero-title"
              data-qa="hero-title"
              variants={item}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              “Free Health Benefits That Boost Your Bottom Line.”
            </motion.h1>

            <motion.p
              data-qa="hero-subtitle"
              variants={item}
              className="mt-6 text-lg leading-relaxed text-sky-100/90 max-w-2xl"
            >
              Deliver 24/7 virtual healthcare, mental health support and more – while lowering payroll taxes.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              <Badge>Section 125–compliant</Badge>
              <Badge>Unlimited telehealth</Badge>
              <Badge>$0 net cost potential</Badge>
            </motion.div>

            {/* CTAs (React Router links) */}
            <nav className="mt-8 flex flex-col items-start gap-3 sm:flex-row" aria-label="Primary calls to action">
              <motion.div variants={item}>
                <Link
                  to="/employers/how-it-works"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-500/95 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-900"
                >
                  See How It Works
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <Link
                  to="/employers/quiz"
                  className="inline-flex items-center justify-center rounded-full border-2 border-teal-300/90 bg-white/10 px-6 py-3 text-base font-semibold text-teal-100 hover:bg-white/20 hover:text-teal-50 transition backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-900"
                >
                  Take the 5-Minute Qualification Quiz
                </Link>
              </motion.div>
            </nav>

            <motion.p variants={item} className="mt-4 text-xs text-sky-100/80">
              Not insurance advice. For educational purposes only.
            </motion.p>

            <motion.div variants={item} className="mt-10">
              <p className="text-sm font-medium text-sky-100/90">Trusted by employers nationwide</p>
              <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-8 rounded-md bg-white/20 backdrop-blur-sm" aria-hidden />
                ))}
              </div>
            </motion.div>
          </header>

          {/* RIGHT: Accent card over the tinted image */}
          <motion.aside
            variants={item}
            className="ml-auto w-full max-w-md rounded-3xl bg-white/85 p-6 shadow-xl backdrop-blur-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">What you get</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Unlimited virtual primary care + mental health
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                $0 net cost potential via payroll tax optimization
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Fast rollout with Section 125 compliance
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link
                to="/employers/how-it-works"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Learn More
              </Link>
              <Link
                to="/employers/quiz"
                className="inline-flex items-center justify-center rounded-full border border-teal-400 bg-white px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                Start Quiz
              </Link>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
    <HowItWorks/>
    <WhatEmployeesGet/>
    <WhatEmployersgain/>
    <ProgramsFeatures/>
    <SavingCalculator/>
    <RealWordResults/>
    <ScoredForm/>
    <FAQ/>
    <CaR/>
    </>
  );
}
