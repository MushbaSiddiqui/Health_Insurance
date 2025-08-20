// src/IndemnityRightCompareVivid.jsx
// React + Tailwind + Framer Motion (motion is optional)

import { motion, useReducedMotion } from "framer-motion";

/* ===== Data (verbatim) ===== */
const GREAT_FOR = [
  "Students",
  "Self-employed professionals",
  "Gig workers",
  "Early retirees",
  "Families between jobs or with limited savings",
];

const NOT_IDEAL =
  "Those with ongoing complex medical conditions who need comprehensive coverage. Consider keeping or purchasing a major medical plan to cover catastrophic costs.";

const ROWS = [
  { feature: "Premium Cost", major: "High", indemnity: "Low – 40–60 % cheaper" },
  { feature: "Deductible", major: true, indemnity: false },
  { feature: "Copays/Coinsurance", major: true, indemnity: false },
  { feature: "Out-of-Pocket Max", major: true, indemnity: false },
  {
    feature: "Provider Choice",
    major: "Often limited",
    indemnity: "Any doctor/hospital; discounts if using MultiPlan network",
  },
  {
    feature: "Benefit Payment",
    major: "Percentage of bill after deductible",
    indemnity: "Fixed cash amount per service",
  },
  {
    feature: "Best For",
    major: "Catastrophic & comprehensive coverage",
    indemnity: "Budget protection, supplemental needs, students & gig workers",
  },
];

/* ===== Tiny icons ===== */
const IconCheck = (p) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...p}>
    <path d="M7.6 13.3 3.8 9.5l1.4-1.4 2.4 2.4 7.2-7.2 1.2 1.2-8.4 8.4z" />
  </svg>
);
const IconX = (p) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...p}>
    <path d="m14.1 5.9-1.4-1.4L10 7.2 7.3 4.5 5.9 5.9 8.6 8.6 5.9 11.3l1.4 1.4L10 10l2.7 2.7 1.4-1.4-2.7-2.7 2.7-2.7z" />
  </svg>
);

/* ===== Helpers ===== */
const Chip = ({ tone = "emerald", label }) => {
  const map = {
    emerald: "from-emerald-500 to-teal-500",
    sky: "from-sky-500 to-indigo-500",
    rose: "from-rose-500 to-fuchsia-500",
  };
  return (
    <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${map[tone]} px-3 py-1 text-xs font-semibold text-white shadow`}>
      {label}
    </span>
  );
};

const BoolCell = ({ val }) => {
  const yes = val === true;
  return (
    <div className="inline-flex items-center gap-2">
      <span className={`grid h-6 w-6 place-items-center rounded-full ring-1 ${yes ? "bg-emerald-50 text-emerald-600 ring-emerald-100" : "bg-rose-50 text-rose-600 ring-rose-100"}`}>
        {yes ? <IconCheck className="h-3.5 w-3.5" /> : <IconX className="h-3.5 w-3.5" />}
      </span>
      <span className="text-sm text-slate-800">{yes ? "Yes" : "None"}</span>
    </div>
  );
};

/* ===== Motion presets (safe + subtle) ===== */
const useFx = () => {
  const reduced = useReducedMotion();
  return reduced
    ? { fade: {}, rise: {} }
    : {
        fade: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: "-120px" }, transition: { duration: 0.5 } },
        rise: { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-120px" }, transition: { duration: 0.55, ease: "easeOut" } },
      };
};

export default function IndemnityRightCompareVivid({ imgSrc = "../public/images/imdemnity-plan.jpg" }) {
  const fx = useFx();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-indigo-50 to-slate-50">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-sky-300/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-indigo-300/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* ===== Header card (image + decision boxes) ===== */}
        <motion.div {...fx.rise} className="rounded-[20px] sm:rounded-[28px] bg-white/70 p-[2px] shadow-[0_20px_60px_rgba(2,6,23,0.12)] ring-1 ring-white/40 backdrop-blur">
          <div className="rounded-[18px] sm:rounded-[26px] bg-gradient-to-br from-white/90 to-slate-50/80">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8 lg:grid-cols-12">
              {/* Left: Illustration */}
              <div className="lg:col-span-5">
                <figure className="relative overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-slate-200/70">
                  <img src={imgSrc} alt="" className="h-48 sm:h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/25 via-indigo-600/20 to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
                </figure>
              </div>

              {/* Right: Text */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Chip tone="sky" label="Indemnity Overview" />
                  <Chip tone="emerald" label="Budget-Friendly" />
                </div>

                <h2 className="mt-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 bg-clip-text text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                  Is Fixed Indemnity Right for You?
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                  {/* Great For */}
                  <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-slate-900">Great For</h3>
                      <Chip tone="emerald" label="Recommended" />
                    </div>
                    <ul className="grid list-disc gap-1.5 sm:gap-2 pl-4 sm:pl-5 text-[14px] sm:text-[15px] leading-relaxed text-slate-700">
                      {GREAT_FOR.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Ideal For */}
                  <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-slate-900">Not Ideal For</h3>
                      <Chip tone="rose" label="Consider Major Medical" />
                    </div>
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-700">{NOT_IDEAL}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Comparison Chart ===== */}
        <motion.div {...fx.fade} className="mt-8 sm:mt-12 lg:mt-16">
          <div className="mb-6 sm:mb-7 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 sm:text-3xl">Compare Plans Side-by-Side</h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              A quick snapshot of how fixed indemnity compares with major medical.
            </p>
          </div>

          {/* Desktop / tablet (cards like your reference) */}
          <div className="hidden rounded-[20px] sm:rounded-[26px] bg-gradient-to-br from-sky-100/60 to-indigo-100/50 p-4 sm:p-6 shadow-[0_18px_40px_rgba(2,6,23,0.08)] md:block">
            {/* Header row */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              <div className="col-span-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-3 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-white shadow">
                Feature
              </div>
              <div className="col-span-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-3 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-white shadow">
                Major Medical
              </div>
              <div className="col-span-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-3 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-white shadow">
                Fixed Indemnity
              </div>
            </div>

            <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {ROWS.map((r) => (
                <div key={r.feature} className="grid grid-cols-12 gap-3 sm:gap-4">
                  <div className="col-span-4 rounded-lg sm:rounded-xl bg-white px-3 sm:px-4 py-3 sm:py-4 text-center text-[13px] sm:text-[15px] font-medium text-slate-900 shadow-sm">
                    {r.feature}
                  </div>
                  <div className="col-span-4 grid place-items-center rounded-lg sm:rounded-xl bg-white px-3 sm:px-4 py-3 sm:py-4 shadow-sm">
                    {typeof r.major === "boolean" ? <BoolCell val={r.major} /> : <span className="text-xs sm:text-sm text-slate-800">{r.major}</span>}
                  </div>
                  <div className="col-span-4 grid place-items-center rounded-lg sm:rounded-xl bg-white px-3 sm:px-4 py-3 sm:py-4 shadow-sm">
                    {typeof r.indemnity === "boolean" ? <BoolCell val={r.indemnity} /> : <span className="text-xs sm:text-sm text-slate-800">{r.indemnity}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: condensed grid */}
          <div className="grid gap-4 sm:gap-6 md:hidden">
            <div className="rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-sky-100/60 to-indigo-100/50 p-4 sm:p-5 shadow-[0_18px_40px_rgba(2,6,23,0.08)]">
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-2 py-2 text-center text-xs font-semibold text-white shadow">
                  Feature
                </div>
                <div className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-2 py-2 text-center text-xs font-semibold text-white shadow">
                  Major Medical
                </div>
                <div className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-2 py-2 text-center text-xs font-semibold text-white shadow">
                  Fixed Indemnity
                </div>
              </div>

              <div className="mt-3 space-y-2">
                {ROWS.map((r) => (
                  <div key={r.feature} className="grid grid-cols-3 items-center gap-2">
                    <div className="rounded-lg bg-white px-2 py-2.5 sm:py-3 text-center text-[12px] sm:text-[13px] font-medium text-slate-900 shadow-sm">
                      {r.feature}
                    </div>
                    <div className="grid place-items-center rounded-lg bg-white px-2 py-2.5 sm:py-3 shadow-sm">
                      {typeof r.major === "boolean" ? <BoolCell val={r.major} /> : <span className="text-[12px] sm:text-[13px] text-slate-800">{r.major}</span>}
                    </div>
                    <div className="grid place-items-center rounded-lg bg-white px-2 py-2.5 sm:py-3 shadow-sm">
                      {typeof r.indemnity === "boolean" ? <BoolCell val={r.indemnity} /> : <span className="text-[12px] sm:text-[13px] text-slate-800">{r.indemnity}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 sm:mt-6 text-center text-xs text-slate-500">
            For education only — not insurance advice. Plan specifics vary by carrier and state.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
