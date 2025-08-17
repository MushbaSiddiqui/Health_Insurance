// src/HowItWorksFlow.jsx
import { motion, useReducedMotion } from "framer-motion";

/* --- Tiny inline icons (no external deps) --- */
const IconSchedule = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3h2v4H8zM14 3h2v4h-2z" />
    <rect x="6" y="10" width="4" height="2" rx="1" />
    <rect x="11" y="10" width="7" height="2" rx="1" />
    <rect x="6" y="14" width="6" height="2" rx="1" />
    <rect x="13" y="14" width="5" height="2" rx="1" />
  </svg>
);
const IconCard = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <rect x="2" y="9" width="20" height="3" />
  </svg>
);
const IconCare = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 21s-7-4.7-7-10A5 5 0 0112 7a5 5 0 017 4c0 5.3-7 10-7 10z" />
    <path d="M10.5 12h3v-2h2v2h2v2h-2v2h-2v-2h-3v-2z" fill="#fff" />
  </svg>
);
const IconWallet = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M3 7a3 3 0 013-3h11v3H6a1 1 0 100 2h14v8a3 3 0 01-3 3H6a3 3 0 01-3-3V7z" />
    <rect x="15" y="11" width="6" height="4" rx="1" fill="#fff" />
  </svg>
);
const IconShield = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2c-3 1.7-6 2.6-9 2.6-.4 0-.7.3-.7.7V10c0 6.8 4.7 13.1 9.7 14.7C17 23.1 21.7 16.8 21.7 10V5.3c0-.4-.3-.7-.7-.7C18 4.6 15 3.7 12 2z" />
    <path d="M10.1 14.2l-2.2-2.2 1.4-1.4 1 1 3.9-3.9 1.4 1.4-5.5 5.5z" fill="#fff" />
  </svg>
);

/* --- Motion helpers --- */
const container = (r) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: r ? 0 : 0.12 } },
});
const item = (r) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: r ? 0 : 0.5, ease: "easeOut" } },
});
const float = (r) =>
  r ? {} : { y: [0, -4, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

/* --- Data (exact text preserved) --- */
const STEPS = [
  {
    title: "Choose Your Coverage Amounts",
    desc:
      "Select a benefit schedule (e.g., $200 for a doctor visit, $1,500 for a hospital day).",
    icon: IconSchedule,
    tone: "from-sky-500 to-indigo-500",
  },
  {
    title: "Pay Your Premium",
    desc: "Monthly premiums are lower because benefits are fixed.",
    icon: IconCard,
    tone: "from-emerald-500 to-teal-500",
  },
  {
    title: "Receive Care",
    desc:
      "Use any provider. Pay the bill and submit a claim; the plan pays you the fixed amount, regardless of the actual cost .",
    icon: IconCare,
    tone: "from-fuchsia-500 to-violet-500",
  },
  {
    title: "Use the Money",
    desc:
      "Apply your indemnity benefit toward medical bills, deductibles, groceries or savings – it’s yours to spend.",
    icon: IconWallet,
    tone: "from-amber-500 to-orange-500",
  },
  {
    title: "Complement Your Major Medical Plan",
    desc:
      "Fixed indemnity plans are designed to supplement existing coverage. If you don’t have major medical insurance, you may face an ACA penalty .",
    icon: IconShield,
    tone: "from-indigo-500 to-sky-500",
  },
];

export default function HowItWorksFlow() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="hiw-title"
      className="relative overflow-hidden bg-white"
    >
      {/* soft stage background */}
      <div className="mx-auto my-10 w-[95%] max-w-6xl rounded-3xl bg-slate-50/70 p-8 shadow-[0_1px_0_rgba(0,0,0,0.03)] sm:my-14 sm:p-10 lg:my-20 lg:p-12">
        {/* header */}
        <div className="text-center">
          <h2
            id="hiw-title"
            className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A simple 5-step flow—clear, compliant, and fast.
          </p>
        </div>

        {/* timeline */}
        <motion.div
          variants={container(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="relative mt-10 grid gap-10 sm:gap-12 lg:mt-12"
        >
          {/* Desktop: horizontal rail with curved dashes */}
          <div className="relative hidden grid-cols-5 items-start gap-6 lg:grid">
            {/* dashed arcs between circles */}
            <svg
              className="pointer-events-none absolute left-0 right-0 top-10 mx-auto h-24 w-[88%]"
              viewBox="0 0 100 24"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* four arcs */}
              {[13, 38, 63, 88].map((cx, i) => (
                <path
                  key={i}
                  d={`M ${cx - 20} 20 Q ${cx} 2 ${cx + 20} 20`}
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="2.5 3.5"
                  strokeWidth="0.8"
                  className="text-slate-300"
                />
              ))}
            </svg>

            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                variants={item(reduced)}
                className="flex flex-col items-center text-center"
              >
                {/* circle */}
                <motion.div
                  className="relative"
                  animate={float(reduced)}
                >
                  <div className="absolute -inset-5 rounded-full bg-slate-900/5 blur-md" aria-hidden />
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.tone} text-white`}
                    >
                      <s.icon className="h-7 w-7" />
                    </div>
                  </div>
                  {/* step number */}
                  <div className="absolute -top-1 -left-1 grid h-6 w-6 place-items-center rounded-full bg-white text-[11px] font-bold text-slate-700 shadow ring-1 ring-slate-200">
                    {i + 1}
                  </div>
                </motion.div>

                {/* copy */}
                <h3 className="mt-4 text-sm font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-1 max-w-[22ch] text-xs leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet: vertical stack with dashed line */}
          <div className="relative grid gap-8 lg:hidden">
            <span
              className="pointer-events-none absolute left-6 top-3 bottom-3 w-px bg-slate-200"
              aria-hidden="true"
            />
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                variants={item(reduced)}
                className="relative grid grid-cols-[44px,1fr] items-start gap-4"
              >
                {/* marker */}
                <div className="relative">
                  <div className="absolute left-[21px] top-12 h-8 w-px border-l border-dashed border-slate-300" />
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                    <div className={`grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br ${s.tone} text-white`}>
                      <s.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -left-1 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-bold text-slate-700 shadow ring-1 ring-slate-200">
                    {i + 1}
                  </span>
                </div>
                {/* copy */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
