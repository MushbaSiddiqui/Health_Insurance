// src/components/Section125Hero.jsx
import React from "react";
import Section125Compliance from "./Section125ComplianceN";
import Footer from "./components/Footer";
import ACALimited from "./AcaLimitedBenefit";
import NonDiscrimination from "./NonDiscriminationAccessibility";
import Privacy from "./privacy-policy1";

export default function Section125Hero() {
  return (
    <>
    <section
      className="relative overflow-hidden"
      aria-labelledby="s125-hero-title"
    >
      {/* Bold, colorful background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-200 via-sky-200 to-emerald-200"
      />
      {/* Soft highlight ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 h-96 w-96 rounded-full bg-white/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-white/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
            Section 125 &amp; Wellness Plan Compliance
          </p>

          {/* Hero title */}
          <h1
            id="s125-hero-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Legitimate Section 125 vs. Abusive Wellness Tax Schemes
          </h1>

          {/* Subcopy — client text only */}
          <p className="mt-5 text-base leading-relaxed text-slate-800 sm:text-lg">
            The IRS has ruled pre‑tax wellness arrangements that reimburse employees for{" "}
            non‑medical activities are <span className="font-semibold">taxable income</span>.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-800 sm:text-lg">
            Our virtual health program charges <span className="font-semibold">bona fide premiums</span> and provides{" "}
            <span className="font-semibold">real medical services</span>; there are no reimbursements or “wellness payments.”
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Employers should consult their tax advisors for individual circumstances and confirm plan suitability.
          </p>

          {/* Colorful chips (visual emphasis only; no new claims) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white">
              Legitimate Section 125
            </span>
            <span className="rounded-full bg-rose-600/90 px-3 py-1 text-xs font-semibold text-white">
              Abusive “Wellness” Tax Schemes
            </span>
            <span className="rounded-full bg-sky-700/90 px-3 py-1 text-xs font-semibold text-white">
              IRS: Non‑medical reimbursements = Taxable
            </span>
          </div>
        </div>
      </div>
    </section>
     <Section125Compliance/>
     <ACALimited/>
     <NonDiscrimination/>
     <Privacy/>
     <Footer/>
     </>
  );
}
