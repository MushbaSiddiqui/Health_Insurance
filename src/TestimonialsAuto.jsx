// src/TestimonialsShowcase.jsx
// React + TailwindCSS (no extra libs)

import React from "react";

/** ---------- DATA ---------- */
const TESTIMONIALS = [
  { kind: "Employer Plan", name: "N.O., Daycare Owner", sub: "12 employees", rating: 5, quote: "Payroll taxes dropped and staff love $0-copay telehealth. It truly paid for itself in our second payroll.", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=900&auto=format&fit=crop", tone: "bg-white text-slate-900" },
  { kind: "Individuals & Families", name: "Ana P., Nursing Student", sub: "", rating: 5, quote: "Premiums are half of what I paid before, and I get cash for doctor visits. No deductible shocks.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop", tone: "bg-amber-400 text-slate-900" },
  { kind: "Employer Plan", name: "S.K., Restaurant Owner", sub: "3 locations", rating: 5, quote: "Happier staff and fewer call-outs. The app made urgent care easy on weekends.", img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=900&auto=format&fit=crop", tone: "bg-white text-slate-900" },
  { kind: "Individuals & Families", name: "Ravi & Maya", sub: "Parents of two", rating: 5, quote: "Fixed cash benefits helped us meet our major-medical deductible without touching savings.", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=900&auto=format&fit=crop", tone: "bg-slate-900 text-white" },
  { kind: "Employer Plan", name: "G.K., Grocery Outlet", sub: "45 employees", rating: 5, quote: "Turnover dropped and recruiting improved. Zero-net cost was real for us.", img: "https://images.unsplash.com/photo-1556911261-6bd341186b38?q=80&w=900&auto=format&fit=crop", tone: "bg-white text-slate-900" },
  { kind: "Individuals & Families", name: "Jade L.", sub: "Self-employed designer", rating: 5, quote: "Kept my doctor and used visit rollovers during a busy quarter. Claim took minutes.", img: "https://images.unsplash.com/photo-1520975922296-6c58b1f2bc4d?q=80&w=900&auto=format&fit=crop", tone: "bg-indigo-50 text-slate-900" },
  { kind: "Employer Plan", name: "M.R., Auto Shop", sub: "15 techs", rating: 4, quote: "Section 125 setup with payroll was simple. The team uses telehealth regularly.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop", tone: "bg-amber-200 text-slate-900" },
  { kind: "Individuals & Families", name: "Marcus T.", sub: "Rideshare", rating: 4, quote: "Cash benefits hit fast and covered prescriptions between shifts—no surprises.", img: "https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=900&auto=format&fit=crop", tone: "bg-white text-slate-900" },
  { kind: "Individuals & Families", name: "Elena R.", sub: "Early retiree", rating: 5, quote: "I know exactly what I’ll be paid for labs and visits. Predictable and affordable.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop", tone: "bg-slate-900 text-white" },
  { kind: "Individuals & Families", name: "The W. Family", sub: "with pets", rating: 5, quote: "Telehealth for the kids and even virtual vet support—one app for everything.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop", tone: "bg-white text-slate-900" },
];

/** ---------- PRESENTATION ---------- */
const Stars = ({ n = 5 }) => (
  <div className="mt-1.5 sm:mt-2 flex items-center gap-1" aria-label={`${n} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${i < n ? "text-emerald-400 sm:text-emerald-500" : "text-slate-300"}`}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 15l-5.878 3.09L5.64 11.18.764 7.41l6.09-.885L10 .5l3.146 6.025 6.09.885-4.876 3.77 1.518 6.91z" />
      </svg>
    ))}
  </div>
);

function Tile({ t }) {
  const rightPanel =
    t.tone.includes("bg-white") || t.tone.includes("bg-indigo-50")
      ? "bg-white/95 text-slate-900"
      : "bg-slate-900/95 text-white";

  return (
    <article className="mx-auto w-full max-w-[780px] overflow-hidden rounded-2xl shadow-2xl">
      <div className="flex w-full">
        {/* left media */}
        <div className="h-28 w-28 sm:h-36 sm:w-40 md:h-40 md:w-56 shrink-0 overflow-hidden">
          <img src={t.img} alt="" className="h-full w-full object-cover" />
        </div>

        {/* right content */}
        <div className={`flex-1 p-3 sm:p-4 md:p-5 ${rightPanel} relative after:absolute after:inset-y-3 after:right-3 after:w-4 after:rounded-full`}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-slate-500/70">
              {t.kind}
            </span>
            <svg className="h-5 w-5 sm:h-6 sm:w-6 opacity-40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 7h5v5H9v5H4v-5c0-2.2 1.8-4 4-4Zm10 0h5v5h-3v5h-5v-5c0-2.2 1.8-4 4-4Z" />
            </svg>
          </div>

          <p className="mt-1 text-[13.5px] sm:text-[15px] leading-relaxed">
            “{t.quote}”
          </p>

          <div className="mt-2.5 sm:mt-3 flex items-center justify-between gap-3">
            <div className="text-[13px] sm:text-sm font-semibold">
              {t.name} {t.sub && <span className="font-normal opacity-70">• {t.sub}</span>}
            </div>
            <Stars n={t.rating} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsShowcase({ className = "" }) {
  // duplicate for seamless loop
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      aria-labelledby="cust-testimonials-title"
    >
      {/* gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-[radial-gradient(130%_70%_at_50%_120%,rgba(255,255,255,0.18),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:py-20">
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-12">
          {/* LEFT — heading & copy */}
          <div className="lg:col-span-5 text-white">
            <div className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-[11px] sm:text-xs font-semibold backdrop-blur">
              Customer Testimonials
            </div>
            <h2
              id="cust-testimonials-title"
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.08]"
            >
              Customer
              <br />
              Testimonials
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 max-w-prose">
              Display what employers and families say about our plans to increase trust.
            </p>
          </div>

          {/* RIGHT — auto-moving stack of tiles */}
          <div className="lg:col-span-7">
            <div className="relative h-[420px] sm:h-[520px] md:h-[600px] overflow-hidden">
              <style>{`
                @keyframes slideUp {
                  0%   { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                .auto-scroll {
                  animation: slideUp 46s linear infinite;
                  will-change: transform;
                }
                .auto-scroll:hover {
                  animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                  .auto-scroll { animation: none !important; }
                }
              `}</style>

              <div className="auto-scroll space-y-4 sm:space-y-5">
                {loop.map((t, i) => (
                  <Tile key={i} t={t} />
                ))}
              </div>

              {/* top/bottom fades */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-blue-600/60 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-indigo-700/60 to-transparent" />
            </div>

            {/* mobile dots (optional visual hint) */}
            <div className="mt-4 flex justify-center gap-1.5 md:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
