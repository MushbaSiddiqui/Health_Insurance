// src/EmployersGainExecutive.jsx
import { motion, useReducedMotion } from "framer-motion";

const container = (r) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: r ? 0 : 0.12 } },
});
const item = (r) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: r ? 0 : 0.45, ease: "easeOut" } },
});

// tiny inline icons (no deps)
const IconCheck = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M9.2 16.2L5 12l1.6-1.6 2.6 2.6 8.2-8.2L19 6.4 9.2 16.2z" />
  </svg>
);
const IconShield = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2c-2.7 1.6-5.6 2.4-8.5 2.4-.4 0-.5.2-.5.5V9c0 6 4 11.7 9 13 5-1.3 9-7 9-13V4.9c0-.3-.2-.5-.5-.5C17.6 4.4 14.7 3.6 12 2z" />
  </svg>
);

export default function EmployersGainExecutive() {
  const reduced = useReducedMotion();

  return (
    <section id="what-employers-gain" className="relative bg-white">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900">
            What Employers Gain
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-indigo-500 to-teal-500" />
        </div>

        {/* Executive stat */}
        <motion.div
          variants={container(reduced)}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col items-center"
        >
          <motion.div
            variants={item(reduced)}
            className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex flex-col items-center gap-2 px-6 py-6 sm:flex-row sm:justify-between sm:gap-4 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-teal-600 text-white">
                  <IconShield className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium text-slate-600">Savings Benchmark</div>
              </div>

              <div className="text-center sm:text-right">
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
                  $600–$900 per employee / year
                </div>
                <p className="mt-1 text-sm text-slate-600">
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Two balanced columns */}
        <motion.div
          variants={container(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {/* Left — Savings & Compliance */}
          <motion.div variants={item(reduced)} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="rounded-t-2xl bg-gradient-to-r from-sky-600 to-teal-600 px-6 py-4 text-white">
              <div className="text-sm font-semibold tracking-wide">Savings & Compliance</div>
            </div>
            <div className="px-6 py-5">
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-indigo-600 text-white">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Zero-Cost Implementation</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate-700">
                      No start-up fees, minimal HR involvement and 100% voluntary participation.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-indigo-600 text-white">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Risk Management & Compliance</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate-700">
                      We handle enrollment and administration, and we stay compliant with Section 125, IRS guidance and
                      ACA rules.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right — People & Productivity */}
          <motion.div variants={item(reduced)} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="rounded-t-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 text-white">
              <div className="text-sm font-semibold tracking-wide">People & Productivity</div>
            </div>
            <div className="px-6 py-5">
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-teal-600 text-white">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Improved Recruitment & Retention</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate-700">
                      Offer $0-copay healthcare and see a pay raise in employees’ checks, a combination proven to reduce
                      turnover.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-teal-600 text-white">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Reduced Sick Days & Productivity Loss</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate-700">
                      Telehealth delivers quick care, reducing absenteeism. Mental health support further improves
                      productivity.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Consolidated summary */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-4 text-center text-[14.5px] font-semibold text-white shadow-sm">
          Together: FICA-driven savings per employee, zero-cost implementation, improved recruitment & retention, fewer
          sick days with telehealth and mental health support, and full compliance with Section 125, IRS guidance and ACA rules.
        </div>
      </div>
    </section>
  );
}
