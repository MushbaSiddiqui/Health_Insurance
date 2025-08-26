// src/HowItWorksFlow.jsx
import { motion, useReducedMotion } from "framer-motion";

/* --- Images (place in public/images/) --- */
const IMG_125   = "/Images/salary.jpg";
const IMG_VIRT  = "/Images/2.jpg";
const IMG_STACK = "/Images/Nochange.jpg";
const IMG_ZERO  = "/Images/4.jpg";
const IMG_COMP  = "/Images/5.png";

/* --- Content --- */
const STEPS = [
  {
    title: "Section 125 Salary Reduction",
    img: IMG_125,
    bullets: [
      "Employees allocate a portion of wages pre-tax. This lowers their taxable income and reduces employer FICA liability.",
      "The resulting 7.65% FICA savings funds the virtual health plan.",
    ],
  },
  {
    title: "Virtual Health Membership",
    img: IMG_VIRT,
    bullets: [
      "Pre-tax contributions fund a wellness package with unlimited telehealth, urgent and primary care, mental health, labs, and prescription discounts",
      "Accessible through an easy-to-use app with services from virtual ER to veterinary care.",
    ],
  },
  {
    title: "No Changes to Your Existing Health Plan",
    img: IMG_STACK,
    bullets: [
      "Our program does not replace or disrupt your major medical or supplemental plans.",
      "It simply stacks on top to provide additional coverage and FICA savings.",
    ],
  },
  {
    title: "Zero-Net Cost",
    img: IMG_ZERO,
    bullets: [
      "Employer savings from reduced FICA contributions offset the program cost.",
      "Employees experience an increase in take-home pay and gain unlimited $0-copay services.",
    ],
  },
  {
    title: "Compliant & Transparent",
    img: IMG_COMP,
    bullets: [
      "This plan is built on established Section 125 rules.",
      "We do not reimburse employees for wellness tasks or provide cash back, which the IRS has deemed taxable.",
      "We strictly follow federal tax laws for cafeteria plans.",
    ],
  },
];

/* --- Motion helpers --- */
const container = (reduced) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: reduced ? 0 : 0.14 },
  },
});
const item = (reduced) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.5, ease: "easeOut" } },
});
const float = (reduced) =>
  reduced ? {} : { y: [0, -4, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

/* --- Horizontal connector (between tiles) --- */
function ArrowConnectorH() {
  return (
    <motion.svg
      width="96"
      height="56"
      viewBox="0 0 96 56"
      aria-hidden="true"
      className="hidden shrink-0 text-slate-300 lg:block"
    >
      <defs>
        <marker id="arrow-head-h" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>
      <motion.path
        d="M 6 46 Q 48 6 90 46"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 8"
        markerEnd="url(#arrow-head-h)"
        initial={{ strokeDashoffset: 14 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
      />
    </motion.svg>
  );
}

/* --- Vertical connector (between cards on mobile) --- */
function ArrowConnectorV() {
  return (
    <motion.svg
      width="24"
      height="64"
      viewBox="0 0 24 64"
      aria-hidden="true"
      className="mx-auto block text-slate-300 lg:hidden"
    >
      <defs>
        <marker id="arrow-head-v" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 0 L 5 10 z" fill="currentColor" />
        </marker>
      </defs>
      <motion.path
        d="M 12 4 C 6 20, 6 44, 12 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 8"
        markerEnd="url(#arrow-head-v)"
        initial={{ strokeDashoffset: 14 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
      />
    </motion.svg>
  );
}

/* --- A single tile --- */
function StepTile({ s, reduced }) {
  return (
    <motion.div variants={item(reduced)} className="flex w-[240px] flex-col items-center text-center">
      <motion.figure
        animate={float(reduced)}
        className="mb-4 grid h-28 w-28 place-items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
      >
        <img src={s.img} alt="" className="h-full w-full object-cover" />
      </motion.figure>
      <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
        {s.bullets.map((b, bi) => (
          <p key={bi}>{b}</p>
        ))}
      </div>
    </motion.div>
  );
}

export default function HowItWorksFlow() {
  const reduced = useReducedMotion();

  return (
    <section id="how-it-works" className="relative bg-white py-16">
      {/* subtle backdrop accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container(reduced)}
          initial="hidden"
          animate="show"
          className="mb-10 pt-6 text-center md:mb-14 md:pt-10"
        >
          <motion.h2 variants={item(reduced)} className="mb-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </motion.h2>
          <motion.p variants={item(reduced)} className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            From tax-efficient funding to compliant delivery—follow the flow.
          </motion.p>
        </motion.div>

        {/* Desktop / large screens: horizontal tiles with arrow connectors */}
        <div className="hidden overflow-x-auto lg:block">
          <motion.div
            variants={container(reduced)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="relative z-10 flex items-start justify-between gap-4"
            style={{ minWidth: 1040 }}
          >
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex items-start">
                <StepTile s={s} reduced={reduced} />
                {i < STEPS.length - 1 && <ArrowConnectorH />}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile / tablet: stacked cards with vertical connectors */}
        <div className="lg:hidden">
          <motion.ol
            variants={container(reduced)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl"
          >
            {STEPS.map((s, i) => (
              <li key={s.title} className="mb-6">
                <motion.div
                  variants={item(reduced)}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img src={s.img} alt="" className="h-14 w-14 rounded-xl border border-slate-200 object-cover" />
                    <h3 className="text-base font-semibold text-slate-900">
                      {i + 1}. {s.title}
                    </h3>
                  </div>
                  <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
                    {s.bullets.map((b, bi) => (
                      <p key={bi}>{b}</p>
                    ))}
                  </div>
                </motion.div>
                {i < STEPS.length - 1 && <div className="py-2"><ArrowConnectorV /></div>}
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
