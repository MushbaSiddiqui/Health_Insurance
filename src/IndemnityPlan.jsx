// src/IndemnityPlan.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* Motion helpers */
const container = (r) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: r ? 0 : 0.12 } },
});
const item = (r) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: r ? 0 : 0.5, ease: "easeOut" } },
});

export default function IndemnityPlan() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="fixed-indemnity-title"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50"
      data-qa="fixed-indemnity"
    >
      {/* soft color glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <motion.div
          variants={container(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12"
        >
          {/* LEFT: copy */}
          <div className="lg:col-span-7">
            <motion.div variants={item(reduced)} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-600" fill="currentColor" aria-hidden="true">
                <path d="M12 2c-3 1.7-6 2.6-9 2.6-.4 0-.7.3-.7.7V10c0 6.8 4.7 13.1 9.7 14.7C17 23.1 21.7 16.8 21.7 10V5.3c0-.4-.3-.7-.7-.7C18 4.6 15 3.7 12 2z" />
                <path d="M10.1 14.2l-2.2-2.2 1.4-1.4 1 1 3.9-3.9 1.4 1.4-5.5 5.5z" fill="#fff" />
              </svg>
              Definition
            </motion.div>

            <motion.h2
              id="fixed-indemnity-title"
              variants={item(reduced)}
              className="mt-3 bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 bg-clip-text text-3xl font-extrabold leading-tight text-transparent sm:text-4xl"
            >
              What Is a Fixed Indemnity Plan?
            </motion.h2>

            {/* exact text you provided */}
            <motion.p variants={item(reduced)} className="mt-5 text-[15.5px] leading-relaxed text-slate-800">
              A fixed indemnity plan pays a predetermined cash benefit for each covered medical service, such as a doctor
              visit or hospital stay. Unlike major medical plans that pay a percentage after deductibles, fixed indemnity
              plans pay you directly, regardless of what the doctor charges. You can use the money for bills, deductibles
              on your major medical plan, or any other expense.
            </motion.p>

            {/* key points */}
            <motion.ul variants={item(reduced)} className="mt-6 grid gap-3">
              {[
                "Predetermined cash benefit per covered service.",
                "Pays you directly—separate from provider billing.",
                "Use funds for bills, major-medical deductibles, or any expense.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-emerald-600 text-white">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                      <rect x="3" y="7" width="18" height="10" rx="2" />
                      <circle cx="12" cy="12" r="2.5" fill="#fff" />
                    </svg>
                  </span>
                  <span className="text-slate-700">{t}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT: visual comparison card */}
          <motion.div
            variants={item(reduced)}
            className="lg:col-span-5"
          >
            {/* Gradient frame + subtle pattern */}
            <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-emerald-300/60 via-sky-300/60 to-indigo-300/60 shadow-xl">
              <div className="relative rounded-3xl bg-white/85 ring-1 ring-white/40 backdrop-blur-sm">
                {/* soft dot pattern inside card */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23000000'/%3E%3C/svg%3E\")",
                    backgroundSize: "22px 22px",
                  }}
                  aria-hidden="true"
                />

                {/* colored header */}
                <div className="relative flex items-center justify-between gap-3 rounded-t-[calc(theme(borderRadius.3xl)-1px)] bg-gradient-to-r from-emerald-600 to-sky-600 px-5 py-4 text-white">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <rect x="3" y="7" width="18" height="10" rx="2" />
                      <circle cx="12" cy="12" r="2.5" fill="#fff" />
                    </svg>
                    How it works (at a glance)
                  </div>
                </div>

                <div className="relative grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
                  {/* fixed indemnity */}
                  <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Fixed Indemnity</div>
                    <div className="mt-1 text-sm font-semibold text-emerald-900">Cash benefit paid to you</div>
                    <p className="mt-2 text-sm text-emerald-800/90">For each covered service (e.g., doctor visit, hospital stay).</p>
                  </div>

                  {/* arrow */}
                  <div className="hidden items-center justify-center sm:flex">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 text-slate-400" fill="none" stroke="currentColor">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* major medical */}
                  <div className="rounded-2xl border border-indigo-200/70 bg-indigo-50/60 p-4 sm:col-start-2">
                    <div className="text-xs font-semibold uppercase tracking-wide text-indigo-700">Major Medical</div>
                    <div className="mt-1 text-sm font-semibold text-indigo-900">Pays % after deductible</div>
                    <p className="mt-2 text-sm text-indigo-800/90">Benefit applies to provider charges after you meet deductibles.</p>
                  </div>
                </div>

                {/* footer hint with tint */}
                <div className="relative rounded-b-[calc(theme(borderRadius.3xl)-1px)] bg-sky-50/80 px-5 py-3 text-[13px] text-slate-700 ring-1 ring-sky-100/60">
                  Tip: Cash from a fixed indemnity plan can help cover bills, deductibles on your major medical plan, or other expenses.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
