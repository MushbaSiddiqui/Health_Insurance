// src/pages/guides/FixedIndemnityGuide.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function FixedIndemnityGuide() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-amber-50/60">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs text-amber-700">Plan Education</p>
          <h1 className="mt-1 text-3xl font-bold">Fixed Indemnity Plan Buyer’s Guide</h1>
          <p className="mt-2 max-w-3xl text-slate-600">
            How fixed-dollar benefits work, how to size amounts, and why these plans are supplemental—not a replacement for major medical.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="?download=pdf" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Download PDF</a>
            <Link to="/resources" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Back to Resources</Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="prose prose-slate max-w-none">
          <h2>What fixed indemnity plans cover</h2>
          <p>
            Fixed indemnity (hospital indemnity and similar) policies pay a <strong>scheduled, fixed dollar amount</strong> for a covered event (e.g., hospital admission, daily confinement, ER visit), regardless of actual charges. They’re designed to help with out-of-pocket costs or non-medical bills.
          </p>

          <h3>Key properties</h3>
          <ul>
            <li>Benefits are paid per event or per period (per day, admission, etc.).</li>
            <li>No network or EOB coordination—cash is paid directly as specified.</li>
            <li>Policies are generally considered <em>excepted benefits</em> and do <strong>not</strong> meet minimum essential coverage requirements.</li>
          </ul>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="m-0">
              <strong>Important:</strong> Regulators emphasize that fixed indemnity coverage is <strong>not a substitute for comprehensive health insurance</strong>.
              See CMS fact sheet and model notice language that clearly states “NOT health insurance”.
              (<a className="underline" href="https://www.cms.gov/newsroom/fact-sheets/short-term-limited-duration-insurance-and-independent-noncoordinated-excepted-benefits-coverage-cms" target="_blank" rel="noreferrer">CMS</a>,
              <a className="underline" href="https://www.sequoia.com/2025/02/hospital-fixed-indemnity-insurance-new-notice-requirement-updated/" target="_blank" rel="noreferrer">Model notice summary</a>).
            </p>
          </div>

          <h2>Choosing benefit amounts</h2>
          <ol>
            <li><strong>Map to real expenses</strong>: e.g., typical ER copay/coinsurance, hospital deductibles, lost wages.</li>
            <li><strong>Use a schedule worksheet</strong>: admission ($X), daily inpatient ($Y), outpatient surgery ($Z), etc.</li>
            <li><strong>Coordinate with your major medical</strong>: target gaps, don’t duplicate.</li>
          </ol>

          <h3>Warnings & pitfalls</h3>
          <ul>
            <li>It won’t cap your annual out-of-pocket like ACA-compliant coverage.</li>
            <li>Advertising can be confusing—some “junk insurance” concerns exist if marketed as primary insurance.
              (<a className="underline" href="https://www.brookings.edu/articles/fixed-indemnity-health-coverage-is-a-problematic-form-of-junk-insurance/" target="_blank" rel="noreferrer">Brookings</a>).
            </li>
            <li>Read exclusions, waiting periods, and coordination rules.</li>
          </ul>

          <h2>Quick checklist</h2>
          <ul>
            <li>Confirm it’s supplemental; retain or obtain comprehensive major medical.</li>
            <li>Pick amounts tied to real, likely expenses.</li>
            <li>Review policy definitions, pre-existing limitations, and claim process.</li>
            <li>Ask how benefits are triggered (CPT codes, admission proof, etc.).</li>
          </ul>

          <h2>Sources & further reading</h2>
          <ul>
            <li><a className="underline" href="https://www.cms.gov/newsroom/fact-sheets/short-term-limited-duration-insurance-and-independent-noncoordinated-excepted-benefits-coverage-cms" target="_blank" rel="noreferrer">CMS fact sheet (fixed indemnity is not a substitute)</a></li>
            <li><a className="underline" href="https://www.sequoia.com/2025/02/hospital-fixed-indemnity-insurance-new-notice-requirement-updated/" target="_blank" rel="noreferrer">Model notice: “NOT health insurance”</a></li>
            <li><a className="underline" href="https://www.brookings.edu/articles/fixed-indemnity-health-coverage-is-a-problematic-form-of-junk-insurance/" target="_blank" rel="noreferrer">Brookings analysis</a></li>
            <li><a className="underline" href="https://www.verywellhealth.com/fixed-indemnity-definition-4571001" target="_blank" rel="noreferrer">Overview & consumer explanation</a></li>
          </ul>

          <hr />
          <p className="text-xs text-slate-500">Educational only; not insurance advice. Review policy certificates and talk to a licensed agent.</p>
        </section>
      </article>
    </main>
  );
}
