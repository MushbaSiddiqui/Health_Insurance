// src/ComplianceRegulatoryNotes.jsx
import { motion, useReducedMotion } from "framer-motion";

/** ---------- Minimal inline icons (no external deps) ---------- */
const IconShieldCheck = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2c-2.8 1.6-5.7 2.4-8.6 2.4-.4 0-.6.3-.6.6V9c0 6.2 4.3 12 9.2 13.4C17 21 21.2 15.2 21.2 9V5c0-.3-.2-.6-.6-.6C17.7 4.4 14.8 3.6 12 2z" />
    <path d="M10.2 13.6l-2.1-2.1 1.4-1.4 1.4 1.4 4.1-4.1 1.4 1.4-5.5 5.5z" fill="#fff" />
  </svg>
);
const IconScale = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M11 3h2v3h3l4 6h-8l4-6h-3v11h3v2H8v-2h3V6H8l4 6H4l4-6h3V3z" />
  </svg>
);
const IconInfo = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="10" opacity=".15" />
    <path d="M11 10h2v7h-2zM11 7h2v2h-2z" />
  </svg>
);
const IconDoc = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M6 2h8l4 4v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
    <path d="M14 2v4h4" fill="#fff" opacity=".35" />
    <rect x="8" y="12" width="8" height="2" fill="#fff" />
    <rect x="8" y="16" width="6" height="2" fill="#fff" />
  </svg>
);

/** ---------- Content (verbatim ideas from your text) ---------- */
const NOTES = [
  {
    id: "irs-dol-guidance",
    title: "IRS & DOL Guidance",
    body:
      'Recent IRS memoranda and DOL investigations have warned employers against "wellness plan" schemes that reimburse employees for completing trivial tasks, returning salary as tax-free cash. These "double-dip" arrangements are considered taxable wages. Our plan avoids this by delivering real health services and charging bona fide insurance premiums.',
    icon: IconShieldCheck,
    tone: "from-sky-600 to-emerald-600",
    tag: "Guidance",
  },
  {
    id: "section125-aca-compliance",
    title: "Section 125 & ACA Compliance",
    body:
      "Contributions are made through a cafeteria plan in accordance with Section 125. Benefits are limited to preventive and wellness care and do not replace ACA-required minimum essential coverage.",
    icon: IconScale,
    tone: "from-indigo-600 to-violet-600",
    tag: "Compliance",
  },
  {
    id: "limited-benefit-disclosure",
    title: "Limited Benefit Disclosure",
    body:
      "Fixed indemnity and virtual health benefits provide limited coverage and are not substitutes for comprehensive health insurance. Without major medical coverage, individuals may owe a tax penalty under the ACA.",
    icon: IconInfo,
    tone: "from-cyan-600 to-sky-600",
    tag: "Disclosure",
  },
  {
    id: "no-tax-legal-advice",
    title: "No Tax or Legal Advice",
    body:
      "Encourage users to consult with tax advisors or legal counsel before implementing any pre-tax benefit arrangement.",
    icon: IconDoc,
    tone: "from-amber-600 to-orange-600",
    tag: "Important",
  },
];

/** ---------- Motion presets ---------- */
const container = (r) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: r ? 0 : 0.12 } },
});
const item = (r) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: r ? 0 : 0.5, ease: "easeOut" } },
});

/** ---------- Component ---------- */
export default function ComplianceRegulatoryNotes() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="compliance-notes-title"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-50"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.sky.200),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.emerald.200),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <header className="mb-10 text-center md:mb-14">
          <h2
            id="compliance-notes-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Compliance &amp; Regulatory Notes
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-700">
            Key compliance considerations behind our Section 125–based virtual health program.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-emerald-500 to-sky-600" />
        </header>

        {/* Cards */}
        <motion.ul
          variants={container(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {NOTES.map(({ id, title, body, icon: Icon, tone, tag }) => (
            <motion.li
              key={id}
              variants={item(reduced)}
              whileHover={!reduced ? { y: -6 } : {}}
              data-qa="compliance-card"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition"
            >
              {/* top accent line */}
              <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${tone}`} />

              <div className="p-6 sm:p-7">
                {/* icon + title row */}
                <div className="flex items-start gap-4">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug text-slate-900">{title}</h3>
                    <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {tag}
                    </span>
                  </div>
                </div>

                {/* body */}
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{body}</p>

                {/* hover underline */}
                <div className={`mt-5 h-px w-0 bg-gradient-to-r ${tone} transition-all duration-300 group-hover:w-full`} />
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footer disclaimer (reinforces the last note) */}
        <div className="mt-10 rounded-2xl bg-white/70 p-4 text-center text-[14.5px] text-slate-700 ring-1 ring-slate-200">
          This information is provided for general educational purposes and does not constitute tax or legal advice. Please
          consult your tax advisor or legal counsel before implementing any pre-tax benefit arrangement.
        </div>
      </div>
    </section>
  );
}
