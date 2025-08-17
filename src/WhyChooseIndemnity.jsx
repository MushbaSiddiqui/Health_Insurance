// src/WhyChooseIndemnityCleanColors.jsx
// Same layout as before, but with NO dark background
// and colorful, professional titles.

import { motion, useReducedMotion } from "framer-motion";

const BENEFITS = [
  { title: "Predictability", desc: "Know exactly what you’ll receive for each service; avoid surprise bills." },
  { title: "Affordability", desc: "Lower premiums mean more room in your budget. Many Americans have less than $5,000 saved for emergencies – fixed indemnity helps manage unexpected costs." },
  { title: "Flexibility", desc: "Use the cash where you need it most." },
  { title: "Freedom to Choose Providers", desc: "No network restrictions ." },
  { title: "Works With HSAs", desc: "Combine with a high-deductible plan and use indemnity benefits to help meet the deductible." },
  { title: "No Hidden Fees", desc: "No application fee; 12-month rate guarantee ." },
];

const BADGE_COLORS = [
  "bg-[#174447]", // deep teal
  "bg-[#5C7481]", // slate blue
  "bg-[#C49B1D]", // gold
  "bg-[#6A5ACD]", // indigo
  "bg-[#0EA5E9]", // sky
  "bg-[#10B981]", // emerald
];

const TITLE_GRADS = [
  "from-sky-600 to-indigo-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-fuchsia-600 to-violet-600",
  "from-cyan-600 to-sky-600",
  "from-rose-600 to-pink-600",
];

export default function WhyChooseIndemnityCleanColors({ className = "" }) {
  const reduce = useReducedMotion();
  const fx = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-120px" },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section className={`relative bg-white ${className}`} aria-labelledby="why-choose-title">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-12">
          {/* vertical divider on large screens */}
          <div className="absolute inset-y-0 hidden w-px translate-x-[calc(33.333%-0.5px)] bg-slate-200 lg:block" />

          {/* LEFT: clean, centered headline (no background) */}
          <aside className="lg:col-span-4 lg:flex lg:flex-col lg:items-center lg:justify-center px-2 py-8">
            <div className="max-w-xs text-center">
              <h2
                id="why-choose-title"
                className="text-4xl font-extrabold leading-[1.05] sm:text-5xl bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 bg-clip-text text-transparent"
              >
                <span className="block">Why</span>
                <span className="block">Choose</span>
                <span className="block">Fixed</span>
                <span className="block">Indemnity?</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Simple, predictable cash benefits that put you in control.
              </p>
            </div>
          </aside>

          {/* RIGHT: rows with colored titles */}
          <div className="lg:col-span-8 lg:pl-12">
            <ul className="divide-y divide-slate-100">
              {BENEFITS.map((b, i) => (
                <motion.li
                  key={b.title}
                  {...fx}
                  transition={{ ...fx.transition, delay: i * 0.04 }}
                  className="grid grid-cols-[92px_1fr] items-start gap-4 py-6"
                >
                  {/* Number badge overlapping the divider */}
                  <div className="relative">
                    <div className="relative -ml-8 hidden lg:block">
                      <div className="h-20 w-20 rounded-full ring-8 ring-white shadow-[0_12px_30px_rgba(2,6,23,0.15)] grid place-items-center">
                        <div
                          className={`h-full w-full ${BADGE_COLORS[i % BADGE_COLORS.length]} rounded-full grid place-items-center text-white`}
                          style={{ fontWeight: 800, fontSize: "1.5rem" }}
                        >
                          {i + 1}
                        </div>
                      </div>
                    </div>
                    {/* Mobile badge */}
                    <div className="lg:hidden">
                      <div className="h-14 w-14 rounded-full ring-6 ring-white shadow grid place-items-center">
                        <div
                          className={`h-full w-full ${BADGE_COLORS[i % BADGE_COLORS.length]} rounded-full grid place-items-center text-white`}
                          style={{ fontWeight: 800 }}
                        >
                          {i + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy with colorful title */}
                  <div className="pr-2">
                    <h3
                      className={`text-lg font-extrabold bg-gradient-to-r ${TITLE_GRADS[i % TITLE_GRADS.length]} bg-clip-text text-transparent`}
                    >
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-700">{b.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
