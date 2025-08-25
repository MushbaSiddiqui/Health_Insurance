// src/components/AcaNotice.jsx
import React from "react";

export default function AcaNotice() {
  return (
    <section
      id="aca-limited-benefit"
      className="relative overflow-hidden"
      aria-labelledby="aca-title"
    >
      {/* Colorful background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-100 via-sky-100 to-emerald-100"
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2
            id="aca-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            ACA &amp; Limited Benefit Plans
          </h2>
        </div>

        {/* Content card */}
        <div className="mx-auto mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <p className="text-base leading-relaxed text-slate-800 sm:text-lg">
            Fixed indemnity plans are <span className="font-semibold text-rose-600">supplemental insurance</span> and
            <span className="font-semibold text-slate-900"> not a substitute</span> for
            <span className="font-semibold text-sky-700"> minimum essential coverage (MEC)</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-800 sm:text-lg">
            Individuals without <span className="font-semibold text-sky-700">major medical coverage</span> may be subject to
            <span className="font-semibold text-amber-700"> tax penalties</span>.
          </p>
        </div>

        {/* Color blocks (visual emphasis only, no extra wording) */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-center text-sm font-medium text-rose-900">
            Supplemental, not MEC
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-center text-sm font-medium text-sky-900">
            Major medical required
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-center text-sm font-medium text-amber-900">
            Penalties may apply
          </div>
        </div>
      </div>
    </section>
  );
}
