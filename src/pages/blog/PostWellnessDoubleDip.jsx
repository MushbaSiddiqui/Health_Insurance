// src/pages/blog/PostWellnessDoubleDip.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PostWellnessDoubleDip() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-amber-50/60">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs text-amber-700">Compliance</p>
          <h1 className="mt-1 text-3xl font-bold">Avoiding “Double Dip” Tax Schemes in Wellness Programs</h1>
          <p className="mt-2 max-w-3xl text-slate-600">
            The IRS has cautioned employers about arrangements claiming tax-free cash reimbursements. Here’s how to stay within the rules.
          </p>
          <div className="mt-4 flex gap-3">
            <Link to="/blog" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              Back to Blog
            </Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="prose prose-slate max-w-none">
          <h2>What “double dip” looks like</h2>
          <p>
            A common pattern: employees elect a pre-tax premium reduction, then receive a purported tax-free cash “reimbursement”
            for wellness activities—effectively trying to exclude both the premium and the cash from tax. IRS guidance has repeatedly
            concluded these cash benefits are taxable wages.
            See summaries from{" "}
            <a href="https://rsmus.com/insights/tax-alerts/2023/wellness-plan-schemes-.html" target="_blank" rel="noreferrer">RSM</a>,{" "}
            <a href="https://www.bdo.com/insights/tax/irs-cautions-employers-again-on-wellness-plans-purporting-to-avoid-payroll-taxes-absent-medical-expe" target="_blank" rel="noreferrer">BDO</a>, and{" "}
            <a href="https://americanfidelity.com/blog/general/irs-wellness-plans/" target="_blank" rel="noreferrer">American Fidelity</a>.
          </p>

          <h3>Stay compliant</h3>
          <ul>
            <li>Offer eligible pre-tax benefits solely via a compliant <strong>Section 125</strong> cafeteria plan.</li>
            <li>Cash-like wellness rewards are generally taxable; set expectations with employees.</li>
            <li>Substantiate medical reimbursements; avoid programs marketed as FICA arbitrage.</li>
          </ul>

          <h2>Action checklist</h2>
          <ul>
            <li>Have counsel review wellness incentives and communication.</li>
            <li>Map payroll codes to ensure taxable vs. pre-tax treatment aligns with plan documents.</li>
            <li>Train HR/payroll teams on substantiation and nondiscrimination testing.</li>
          </ul>

          <hr />
          <p className="text-xs text-slate-500">
            Educational only; not tax advice. Consult your advisors.
          </p>
        </section>
      </article>
    </main>
  );
}
