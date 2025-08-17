// src/LegalDisclosures.jsx
// Professional legal-notices block — React + Tailwind + (optional) Framer Motion

import { motion, useReducedMotion } from "framer-motion";

/** Verbatim copy from your text */
const DISCLOSURES = [
  {
    title: "Limited Benefit Plan",
    body:
      "This policy provides limited benefits and is not a substitute for major medical insurance .",
    icon: "shield",
  },
  {
    title: "State Variations",
    body:
      "Benefits, availability and rates vary by state; please contact a licensed agent for specific details.",
    icon: "map",
  },
  {
    title: "No Guarantees of Savings",
    body:
      "Actual savings depend on the benefit schedule selected and your medical usage.",
    icon: "scale",
  },
];

/** Minimal inline icons (no external deps) */
const Icon = ({ name, className = "h-5 w-5" }) => {
  if (name === "shield")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 2 4 5v6c0 5 3.6 9.4 8 11 4.4-1.6 8-6 8-11V5l-8-3zm0 18c-3.3-1.3-6-4.9-6-9V6.6l6-2.3 6 2.3V11c0 4.1-2.7 7.7-6 9z" />
      </svg>
    );
  if (name === "map")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M15 4.6 9 2 3.6 4.1A1 1 0 0 0 3 5v14a1 1 0 0 0 1.4.9L9 17.4l6 2.6 5.4-2.1a1 1 0 0 0 .6-.9V3.9A1 1 0 0 0 20.6 3L15 4.6ZM9 4.2l6 2.6v12.2l-6-2.6V4.2ZM5 6.1l2-.8v12.4l-2 .8V6.1Zm14 11.8-2 .8V6.3l2-.8v12.4Z" />
      </svg>
    );
  // scale of justice-ish
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M11 4V2h2v2h5v2h-4.1l3.7 6.7A3.5 3.5 0 0 1 14 16a3.5 3.5 0 0 1-3.6-3.3L10 12l-3.3-6H5V4h6Zm1 3.3 2.6 4.8H9.4L12 7.3ZM6 13c0 1.7-1.3 3-3 3s-3-1.3-3-3h6Zm24 0c0 1.7-1.3 3-3 3s-3-1.3-3-3h6ZM11 18h2v2h4v2H7v-2h4v-2Z" />
    </svg>
  );
};

export default function LegalDisclosures({ className = "" }) {
  const reduce = useReducedMotion();
  const fx = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.45, ease: "easeOut" },
      };

  return (
    <section
      className={`relative overflow-hidden bg-white ${className}`}
      aria-labelledby="legal-title"
      role="region"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
        {/* Header */}
        <motion.div {...fx} className="text-center">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
          Important Notices
          </span>
          <h2
            id="legal-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Legal Disclosures
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
            Please review carefully. Coverage details and eligibility vary.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {DISCLOSURES.map((d, idx) => (
            <motion.article
              key={d.title}
              {...fx}
              transition={{ ...fx.transition, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:shadow-md"
              role="note"
              aria-label={d.title}
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                    {d.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-6 max-w-5xl text-center text-xs text-slate-500">
          This overview is for educational purposes only and does not constitute
          tax, legal, or insurance advice. Consult a licensed agent and your
          advisors for guidance specific to your situation.
        </p>
      </div>
    </section>
  );
}
