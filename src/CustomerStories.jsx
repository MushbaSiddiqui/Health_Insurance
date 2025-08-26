// src/CustomerStories.jsx
// React + Tailwind + (optional) Framer Motion for subtle entrance

import { motion, useReducedMotion } from "framer-motion";

const DEFAULT_STORIES = [
  {
    title: "Student & Gig Worker",
    blurb:
      "Lowered monthly premiums by 50% while still getting money for doctor visits.",
    stat: "50% Lower Premiums",
    img: "/Images/gig.jpg", // dummy
  },
  {
    title: "Family of Four",
    blurb:
      "Used the cash benefits to cover deductibles on their major medical plan and pay for childcare.",
    stat: "Cash for Deductibles",
    img: "/Images/four.jpg", // dummy
  },
  {
    title: "Self-Employed Designer",
    blurb:
      "Kept her trusted doctor and used rollover visits when she needed extra care one year.",
    stat: "Kept Her Doctor",
    img: "/Images/designer.jpg", // dummy
  },
];

const useFx = () => {
  const reduce = useReducedMotion();
  return reduce
    ? { container: {}, item: {} }
    : {
        container: {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-120px" },
          transition: { when: "beforeChildren", staggerChildren: 0.12 },
        },
        item: {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-120px" },
          transition: { duration: 0.55, ease: "easeOut" },
        },
      };
};

export default function CustomerStories({
  stories = DEFAULT_STORIES,
  className = "",
}) {
  const fx = useFx();

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-sky-50 via-indigo-50 to-slate-50 ${className}`}
      aria-labelledby="stories-title"
    >
      {/* soft glows */}
      <div className="pointer-events-none absolute -top-24 -left-28 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-28 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
            Customer Stories
          </span>
          <h2
            id="stories-title"
            className="mt-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl"
          >
            Real people. Real results.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Three ways fixed indemnity helped members save and keep the care they trust.
          </p>
        </div>

        {/* cards */}
        <motion.div
          {...fx.container}
          className="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3"
        >
          {stories.map((s, i) => (
            <motion.article
              key={i}
              {...fx.item}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(2,6,23,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(2,6,23,0.12)]"
            >
              {/* media */}
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </figure>

              {/* content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-1 text-[11px] font-semibold text-white">
                    {s.stat}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{s.blurb}</p>
              </div>

              {/* subtle corner accent */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rotate-12 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-400/20 blur-xl" />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-sky-300/50"
          >
            See All Success Stories
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
