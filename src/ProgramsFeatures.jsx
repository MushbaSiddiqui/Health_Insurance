// src/ProgramFeatures.jsx
import { motion, useReducedMotion } from "framer-motion";

/** --- Minimal inline icons (no extra deps) --- */
const IconER = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <rect x="11" y="7" width="2" height="10" fill="#fff" />
    <rect x="7" y="11" width="10" height="2" fill="#fff" />
  </svg>
);
const IconMind = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 3a7 7 0 00-7 7c0 2.6 1.4 4.3 3 5v3h5l1-2h3a4 4 0 000-8 7 7 0 00-5-5z" />
  </svg>
);
const IconPill = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M7 3a6 6 0 000 12 6 6 0 006-6V3H7z" />
    <rect x="11" y="7" width="10" height="10" rx="5" fill="currentColor" opacity=".25" />
  </svg>
);
const IconDoc = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
    <rect x="8" y="12" width="8" height="2" fill="#fff" />
    <rect x="8" y="16" width="6" height="2" fill="#fff" />
  </svg>
);
const IconChart = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <rect x="3" y="19" width="18" height="2" fill="currentColor" />
    <rect x="6" y="10" width="3" height="7" fill="currentColor" />
    <rect x="11" y="6" width="3" height="11" fill="currentColor" />
    <rect x="16" y="12" width="3" height="5" fill="currentColor" />
  </svg>
);
const IconLifestyle = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M12 3l6 10H6l6-10zm-7 14h14a3 3 0 01-3 3H8a3 3 0 01-3-3z" />
  </svg>
);
const IconPaw = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="7" cy="8" r="2.2" fill="currentColor" />
    <circle cx="12" cy="6.5" r="2" fill="currentColor" />
    <circle cx="17" cy="8" r="2.2" fill="currentColor" />
    <path d="M12 12c-3 0-5 2.3-5 4.6 0 1.4 1.2 2.4 2.6 2.4h4.8c1.4 0 2.6-1 2.6-2.4 0-2.3-2-4.6-5-4.6z" fill="currentColor" />
  </svg>
);

/** --- Content (verbatim from your text) --- */
const FEATURES = [
  {
    icon: IconER,
    title: "Virtual ER, Primary & Urgent Care",
    desc: "24/7 access to board-certified physicians.",
  },
  {
    icon: IconMind,
    title: "Behavioral Health & Mental Wellness",
    desc: "Counseling, coaching and stress management support.",
  },
  {
    icon: IconPill,
    title: "Dermatology, Chronic Disease Management & Prescription Program",
    desc: "Specialist consultations, chronic care check-ins and discounted medications.",
  },
  {
    icon: IconDoc,
    title: "Billing Advocacy & Claims Support",
    desc: "Assistance with claims and billing issues similar to Included Health’s model.",
  },
  {
    icon: IconChart,
    title: "Health Risk Assessments & Biometrics",
    desc: "Regular screenings and biometric tests to identify risks early.",
  },
  {
    icon: IconLifestyle,
    title: "Weight Management & Smoking Cessation",
    desc: "Lifestyle programs to improve overall well-being.",
  },
  {
    icon: IconPaw,
    title: "Virtual Veterinarian & Family Care",
    desc: "Pet telehealth and support for dependents.",
  },
];

/** --- Motion presets --- */
const container = (r) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: r ? 0 : 0.12 } },
});
const item = (r) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: r ? 0 : 0.45, ease: "easeOut" } },
});

/** --- Component --- */
export default function ProgramFeatures() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-white">
      {/* Soft backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.sky.200),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
           Comprehensive virtual care- built for employees & families 
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900">
            Program Features &amp; Services
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-indigo-500 to-teal-500" />
        </div>

        {/* Feature grid */}
        <motion.ul
          variants={container(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              variants={item(reduced)}
              whileHover={!reduced ? { y: -6 } : {}}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition"
            >
              {/* Accent ribbon */}
              <div
                aria-hidden
                className={[
                  "absolute inset-x-0 top-0 h-1.5",
                  i % 3 === 0
                    ? "bg-gradient-to-r from-sky-500 to-teal-500"
                    : i % 3 === 1
                    ? "bg-gradient-to-r from-indigo-500 to-violet-600"
                    : "bg-gradient-to-r from-emerald-500 to-cyan-500",
                ].join(" ")}
              />

              <div className="p-5 sm:p-6">
                {/* Icon + title */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-teal-600 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-slate-900">{title}</h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{desc}</p>

                {/* Hover underline */}
                <div className="mt-4 h-px w-0 bg-gradient-to-r from-indigo-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footnote (optional, small + subtle) */}
        <p className="mt-10 text-center text-xs text-slate-500">
          Images/icons are illustrative. Text reflects program features exactly as provided.
        </p>
      </div>
    </section>
  );
}
