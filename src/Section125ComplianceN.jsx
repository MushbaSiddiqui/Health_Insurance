// src/components/Section125Minimal.jsx
import React from "react";

export default function Section125Minimal() {
  return (
    <section
      id="section125-wellness"
      className="relative overflow-hidden"
      aria-labelledby="s125-title"
    >
      {/* Colorful background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-100 via-sky-100 to-emerald-100"
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2
            id="s125-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Section 125 &amp; Wellness Plan Compliance
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
            Describe the difference between legitimate Section 125 plans and abusive wellness tax schemes.
          </p>
        </div>

        {/* Three concise cards (client text only) */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Legitimate Section 125 */}
          <article className="rounded-2xl border border-emerald-300 bg-white p-5 shadow-lg">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-800">
              Legitimate Section 125 plans
            </div>
            <p className="text-sm leading-relaxed text-slate-800">
              Legitimate Section 125 plans.
            </p>
          </article>

          {/* Abusive wellness tax schemes / IRS statement */}
          <article className="rounded-2xl border border-rose-300 bg-white p-5 shadow-lg">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-medium text-rose-800">
              Abusive wellness tax schemes
            </div>
            <p className="text-sm leading-relaxed text-slate-800">
              The IRS has ruled pre‑tax wellness arrangements that reimburse employees for
              non‑medical activities as <span className="font-semibold text-rose-700">taxable income</span>.
            </p>
          </article>

          {/* Your program stance */}
          <article className="rounded-2xl border border-sky-300 bg-white p-5 shadow-lg">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-800">
              Our virtual health program
            </div>
            <p className="text-sm leading-relaxed text-slate-800">
              We charge <span className="font-semibold text-slate-900">bona fide premiums</span> and provide
              <span className="font-semibold text-slate-900"> real medical services</span>; there are
              <span className="font-semibold text-sky-700"> no reimbursements</span> or
              <span className="font-semibold text-sky-700"> “wellness payments.”</span>
            </p>
          </article>
        </div>

        {/* CTA / advisor note */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-lg">
          <p className="text-sm text-slate-800">
            Encourage employers to consult their tax advisors for individual circumstances and confirm plan suitability.
          </p>
        </div>
      </div>
    </section>
  );
}
