// src/pages/guides/Section125Guide.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Section125Guide() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-sky-50/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs text-sky-700">Compliance Guide</p>
          <h1 className="mt-1 text-3xl font-bold">Understanding Section 125 &amp; FICA Savings</h1>
          <p className="mt-2 max-w-3xl text-slate-600">
            A plain-English overview of cafeteria plans, eligibility, substantiation, and common pitfalls—plus a one-page checklist.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="?download=pdf" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Download PDF</a>
            <Link to="/resources" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Back to Resources</Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="prose prose-slate max-w-none">
          <h2>At a glance</h2>
          <ul>
            <li>
              A <strong>Section 125 cafeteria plan</strong> lets employees choose taxable cash or allowable pre-tax benefits without making the benefits taxable, when the plan is properly documented and administered.
              See IRS overview and training materials
              (<a className="underline" href="https://www.irs.gov/government-entities/federal-state-local-governments/faqs-for-government-entities-regarding-cafeteria-plans" target="_blank" rel="noreferrer">IRS FAQs</a>,
              <a className="underline" href="https://www.irs.gov/pub/irs-tege/lesson4.pdf" target="_blank" rel="noreferrer">IRS Training</a>).
            </li>
            <li>
              Employees can reduce taxable wages to pay certain qualified benefits—often reducing both income tax and <strong>FICA</strong>.
              (<a className="underline" href="https://rsmus.com/insights/tax-alerts/2023/irs-issues-guidelines-regarding-substantiation-of-expenses-for-c.html" target="_blank" rel="noreferrer">RSM explainer</a>).
            </li>
            <li>
              <strong>Eligibility limits</strong> apply: the Code treats owners like sole proprietors, partners, and &gt;2% S-corp shareholders as <em>not</em> employees for cafeteria plan purposes.
              (<a className="underline" href="https://www.nfp.com/insights/owner-employees-cafeteria-plan-eligibility-explained/" target="_blank" rel="noreferrer">NFP</a>).
            </li>
          </ul>

          <h2>How a compliant plan works</h2>
          <ol>
            <li><strong>Plan document</strong>: Adopt a written plan describing benefits, eligibility, elections, and change rules.</li>
            <li><strong>Elections</strong>: Prospective, with limited mid-year changes allowed under IRS rules.</li>
            <li><strong>Substantiation</strong>: Pre-tax reimbursements require proper documentation of eligible expenses.</li>
            <li><strong>Nondiscrimination</strong>: Avoid favoring highly compensated or key employees (Section 125 tests).</li>
          </ol>

          <h3>Common red flags to avoid</h3>
          <ul>
            <li>
              “<strong>Tax-free cash reimbursements</strong>” or “wellness” schemes marketed as FICA arbitrage—IRS has flagged these; cash benefits are typically taxable wages.
              (<a className="underline" href="https://rsmus.com/insights/tax-alerts/2023/wellness-plan-schemes-.html" target="_blank" rel="noreferrer">RSM summary</a>).
            </li>
            <li>Allowing ineligible owners to participate (<a className="underline" href="https://www.nfp.com/insights/owner-employees-cafeteria-plan-eligibility-explained/" target="_blank" rel="noreferrer">NFP</a>).</li>
            <li>Poor documentation or lack of substantiation controls.</li>
          </ul>

          <h2>Checklist (1 page)</h2>
          <ul>
            <li>Written Section 125 plan adopted and distributed</li>
            <li>Eligible benefits defined (e.g., pre-tax premiums, FSA, DCFSA)</li>
            <li>Owner/employee status reviewed; ineligible owners excluded</li>
            <li>Elections prospective; mid-year change rules configured</li>
            <li>Substantiation workflow in place for reimbursements</li>
            <li>Nondiscrimination testing on calendar</li>
            <li>Payroll mapped to ensure correct pre-tax and FICA treatment</li>
          </ul>

          <h2>Further reading</h2>
          <ul>
            <li><a className="underline" href="https://www.irs.gov/government-entities/federal-state-local-governments/faqs-for-government-entities-regarding-cafeteria-plans" target="_blank" rel="noreferrer">IRS: FAQs on Cafeteria Plans</a></li>
            <li><a className="underline" href="https://www.irs.gov/pub/irs-tege/lesson4.pdf" target="_blank" rel="noreferrer">IRS Training (Section 125 overview)</a></li>
            <li><a className="underline" href="https://rsmus.com/insights/tax-alerts/2023/irs-issues-guidelines-regarding-substantiation-of-expenses-for-c.html" target="_blank" rel="noreferrer">RSM: Substantiation & FICA</a></li>
            <li><a className="underline" href="https://rsmus.com/insights/tax-alerts/2023/wellness-plan-schemes-.html" target="_blank" rel="noreferrer">RSM: “Wellness” scheme warning</a></li>
            <li><a className="underline" href="https://www.nfp.com/insights/owner-employees-cafeteria-plan-eligibility-explained/" target="_blank" rel="noreferrer">NFP: Owner/employee eligibility</a></li>
          </ul>

          <hr />
          <p className="text-xs text-slate-500">
            This material is for educational purposes and is not tax or legal advice. Consult your advisors.
          </p>
        </section>
      </article>
    </main>
  );
}
