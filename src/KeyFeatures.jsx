// src/KeyFeaturesHub.jsx
// Two-slide layout: slide 1 shows first 6 features, slide 2 shows remaining.
// React + Tailwind + Framer Motion

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ----- Small inline icons ----- */
const IconList = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <rect x="9" y="4" width="11" height="3" rx="1" />
    <rect x="9" y="10.5" width="11" height="3" rx="1" />
    <rect x="9" y="17" width="11" height="3" rx="1" />
    <circle cx="5" cy="5.5" r="1.6" />
    <circle cx="5" cy="12" r="1.6" />
    <circle cx="5" cy="18.5" r="1.6" />
  </svg>
);
const CheckIcon = (p) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M7.5 13.5 3.6 9.6l1.4-1.4 2.5 2.5 7.5-7.5L16.9 5 7.5 13.5z" />
  </svg>
);

/* ----- Motion helpers ----- */
const container = (r) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: r ? 0 : 0.08 } },
});
const item = (r) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: r ? 0 : 0.45, ease: "easeOut" } },
});

/* ----- Data (same copy as before) ----- */
const ALL_FEATURES = [
  { title: "40–60 % Lower Premiums", desc: "Because benefits are fixed, premiums are much lower than typical ACA plans .", tone: "from-emerald-600 to-teal-600" },
  { title: "No Deductibles, Copays or Coinsurance", desc: "You get paid immediately; there are no out-of-pocket costs before benefits kick in .", tone: "from-indigo-600 to-sky-600" },
  { title: "Cash Benefits for Hospitalization", desc: "Unlimited inpatient confinement and surgical benefits for any length of stay or number of surgeries .", tone: "from-fuchsia-600 to-violet-600" },
  { title: "Increasing Benefits", desc: "Benefit amounts increase by 25 % each year you keep the plan (up to year five) .", tone: "from-teal-600 to-emerald-600" },
  { title: "Tiered Surgical Payments", desc: "Higher benefits for more complex surgeries and additional payments for assistant surgeons .", tone: "from-violet-600 to-indigo-600" },
  { title: "Doctor & Urgent Care Visit Rollover", desc: "Unused visit benefits roll over to the next year (up to five visits) .", tone: "from-sky-600 to-cyan-600" },
  { title: "Wellness & Preventive Visits", desc: "Benefit payments for annual physicals, mammograms and immunizations .", tone: "from-emerald-600 to-sky-600" },
  { title: "Second Opinion Benefit", desc: "Get paid to consult another doctor before surgery .", tone: "from-rose-600 to-fuchsia-600" },
  { title: "Prescription Discount Card", desc: "Discounts of 50–75 % on medications .", tone: "from-orange-600 to-amber-600" },
  { title: "Network Freedom", desc: "See any doctor or hospital. If you use MultiPlan providers, you gain access to discounted rates, stretching your benefits further .", tone: "from-indigo-600 to-teal-600" },
  { title: "Keep Your Doctor & Specialist", desc: "Our indemnity plans use the same provider network as many major medical plans, so you can keep your current physicians and hospitals .", tone: "from-sky-600 to-indigo-600" },
  { title: "Renewable Up to Age 65", desc: "Coverage remains available as long as you need it .", tone: "from-emerald-600 to-teal-600" },
];

const PAGE_SIZE = 6;
const PAGES = [
  ALL_FEATURES.slice(0, PAGE_SIZE),
  ALL_FEATURES.slice(PAGE_SIZE),
];

/* ----- Rail Card ----- */
function RailCard({ feature, reduced }) {
  const { title, desc, tone } = feature;
  return (
    <motion.li variants={item(reduced)} className="relative">
      {/* L-connector */}
      <span aria-hidden className="absolute right-full top-1/2 -translate-y-1/2 w-8 h-px bg-slate-300/70" />
      <div className="relative overflow-hidden rounded-r-2xl rounded-l-[28px] bg-white shadow-sm ring-1 ring-slate-200">
        <div className={`absolute inset-y-0 left-0 w-24 -skew-x-[18deg] origin-left bg-gradient-to-r ${tone}`} />
        <div className="relative z-10 flex items-start gap-4 px-5 py-4 sm:px-6">
          <span className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-900 shadow ring-1 ring-white/40">
            <span className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-r ${tone} text-white`}>
              <CheckIcon className="h-4 w-4" />
            </span>
          </span>
          <div>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-[14.5px] leading-relaxed text-slate-700">{desc}</p>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

/* ----- Main ----- */
export default function KeyFeaturesHub() {
  const reduced = useReducedMotion();
  const [page, setPage] = useState(0); // 0 or 1

  // Keyboard nav (← →)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setPage((p) => Math.min(p + 1, PAGES.length - 1));
      if (e.key === "ArrowLeft") setPage((p) => Math.max(p - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      aria-labelledby="kfh-title"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-50"
    >
      {/* glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-10 text-center md:mb-14">
          <h2
            id="kfh-title"
            className="bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 bg-clip-text text-3xl font-extrabold leading-tight text-transparent sm:text-4xl"
          >
            Key Features &amp; Benefits
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-emerald-500 to-sky-600" />
        </div>

        <motion.div
          variants={container(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[460px,1fr]"
        >
          {/* HUB */}
          <motion.div variants={item(reduced)} className="relative mx-auto lg:mx-0">
            <div className="relative h-[320px] w-[320px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 opacity-90" />
              <div className="absolute inset-6 rounded-full bg-white" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-sky-50 to-indigo-50 ring-1 ring-slate-200" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow">
                    <IconList className="h-8 w-8" />
                  </span>
                  <span className="mt-3 text-lg font-bold text-slate-900">Key Features</span>
                </div>
              </div>
              <span className="absolute inset-0 rounded-full ring-4 ring-emerald-400/20 animate-pulse" />
            </div>
          </motion.div>

          {/* SLIDER: rail + cards */}
          <div className="relative">
            {/* vertical rail (only on lg+) */}
            <span aria-hidden className="absolute -left-8 top-0 bottom-0 w-px bg-slate-300/70 hidden lg:block" />

            <div className="overflow-hidden" aria-live="polite">
              <motion.div
                className="flex"
                animate={{ x: `-${page * 100}%` }}
                transition={{ type: reduced ? "tween" : "spring", stiffness: 120, damping: 20 }}
                style={{ width: `${PAGES.length * 100}%` }}
              >
                {PAGES.map((group, idx) => (
                  <ul
                    key={idx}
                    className="min-w-full grid grid-cols-1 gap-5"
                    aria-label={idx === 0 ? "Features 1–6" : "Features 7–12"}
                  >
                    {group.map((f) => (
                      <RailCard key={f.title} feature={f} reduced={reduced} />
                    ))}
                  </ul>
                ))}
              </motion.div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 0))}
                disabled={page === 0}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
              >
                ← Back
              </button>

              <div className="flex items-center gap-2">
                {PAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full ${page === i ? "bg-indigo-600" : "bg-slate-300 hover:bg-slate-400"}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, PAGES.length - 1))}
                disabled={page === PAGES.length - 1}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
              >
                {page === 0 ? "Show next 6 →" : "End"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
