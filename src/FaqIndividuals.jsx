// src/FaqIndividualsPro.jsx
// Professional, accessible FAQ accordion for Individuals & Families
// Tech: React + Tailwind (+ Framer Motion optional, used minimally)

import { useState, useId } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* --------- Data (verbatim copy) --------- */
const FAQS = [
  {
    q: "Will I owe an ACA penalty if I only have this plan?",
    a: "Fixed indemnity plans are limited benefit policies and do not count as minimum essential coverage . Without major medical insurance, you may owe a tax penalty.",
  },
  {
    q: "Do I need a medical exam?",
    a: "No. Most plans require a simple application and have no underwriting .",
  },
  {
    q: "How long can I keep the plan?",
    a: "Up to age 65, renewable annually .",
  },
  {
    q: "Can I use this plan with my employer’s insurance?",
    a: "Yes. Use indemnity benefits to help pay deductibles and coinsurance.",
  },
];

/* --------- Icons (inline, no deps) --------- */
const Chevron = ({open}) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const InfoDot = () => (
  <span
    aria-hidden
    className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-indigo-600"
  />
);

/* --------- Single item --------- */
function FaqItem({
  q,
  a,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const reduce = useReducedMotion();

  return (
    <li
      className={`rounded-xl border bg-white transition-shadow ${
        open ? "border-indigo-200 shadow-sm" : "border-slate-200 hover:shadow-sm"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex w-full items-start justify-between gap-4 rounded-xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
      >
        <div className="flex items-start">
          <span
            aria-hidden
            className={`mt-2 mr-3 inline-block h-3 w-3 rounded-full transition-colors ${
              open ? "bg-indigo-600" : "bg-slate-300"
            }`}
          />
          <span className="text-[15px] font-semibold leading-6 text-slate-900">
            {q}
          </span>
        </div>
        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 px-5 py-4">
              <p className="text-[15px] leading-relaxed text-slate-700">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* --------- Section --------- */
export default function FaqIndividualsPro({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <section
      className={`relative bg-white ${className}`}
      aria-labelledby="faq-individuals-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        {/* Header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            <InfoDot />
            Answers to common questions
          </div>
          <h2
            id="faq-individuals-title"
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
           FAQs for Individuals & Families
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Clear guidance on coverage, eligibility, and how fixed indemnity works alongside major medical.
          </p>
        </motion.div>

        {/* FAQ list */}
        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:gap-5">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </ul>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Educational only — not insurance or tax advice. Check carrier/state specifics for details.
        </p>
      </div>
    </section>
  );
}
