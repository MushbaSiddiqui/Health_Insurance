// src/pages/guides/FIAGuide.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function FIAGuide() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-emerald-50/60">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs text-emerald-700">Retirement Insight</p>
          <h1 className="mt-1 text-3xl font-bold">Safe Growth for Retirement: Fixed Indexed Annuities (FIAs)</h1>
          <p className="mt-2 max-w-3xl text-slate-600">
            How FIAs can help turn increased take-home pay into tax-deferred growth with downside protection, plus what to watch for.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="?download=pdf" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Download PDF</a>
            <Link to="/resources" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Back to Resources</Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="prose prose-slate max-w-none">
          <h2>FIA basics</h2>
          <ul>
            <li>Insurance product with <strong>principal protection</strong> (subject to the claims-paying ability of the insurer).</li>
            <li>Interest credited based on an index with <strong>caps, spreads, or participation rates</strong>, and no direct equity ownership.</li>
            <li>Tax-deferred growth; potential surrender charges and optional riders/fees.</li>
          </ul>
          <p className="text-sm">
            See regulators’ primers on key mechanics:
            <a className="underline" href="https://www.finra.org/investors/insights/complicated-risks-and-rewards-indexed-annuities" target="_blank" rel="noreferrer"> FINRA</a>,
            <a className="underline" href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-investor-bulletin-indexed-annuities" target="_blank" rel="noreferrer"> Investor.gov</a>.
          </p>

          <h2>Why pair FIAs with higher take-home pay</h2>
          <p>
            Employers using compliant pre-tax benefits may increase employees’ take-home pay. Channeling a portion into FIAs can create a <strong>disciplined, downside-aware savings path</strong> for long-term goals.
          </p>

          <h3>Downside protection & sequence-of-returns risk</h3>
          <p>
            Research assessing accumulation-focused FIAs suggests they can <strong>improve portfolio downside characteristics</strong> and help smooth returns when used as part of a diversified strategy.
            See a BlackRock white paper evaluating accumulation FIAs’ role in portfolios
            (<a className="underline" href="https://oakharvestfg.com/wp-content/uploads/2022/05/BlackRock-White-Paper.pdf?x85886=" target="_blank" rel="noreferrer">BlackRock research PDF</a>).
          </p>
          <p className="text-sm">
            Broader BlackRock insights also emphasize mitigating drawdowns and building income-centric allocations in volatile markets
            (<a className="underline" href="https://www.blackrock.com/us/financial-professionals/insights/positioning-for-retirement" target="_blank" rel="noreferrer">Positioning for retirement</a>).
          </p>

          <h2>What to evaluate</h2>
          <ul>
            <li><strong>Time horizon & liquidity</strong>: surrender periods, free withdrawal amounts, loan provisions.</li>
            <li><strong>Index crediting</strong>: cap vs. participation rate vs. spread; reset methods.</li>
            <li><strong>Fees & riders</strong>: income riders, enhanced benefits, and their costs.</li>
            <li><strong>Insurer strength</strong>: ratings and claims-paying ability.</li>
            <li><strong>Tax</strong>: withdrawals may be taxable; penalties may apply before age 59½.</li>
          </ul>

          <h2>Sample action plan</h2>
          <ol>
            <li>Decide contribution amount from increased net pay (e.g., 10–20%).</li>
            <li>Compare at least two FIA carriers’ caps/spreads and surrender schedules.</li>
            <li>Stress-test against a poor-sequence market path.</li>
            <li>Review surrender charge schedule and liquidity needs.</li>
            <li>Document rationale and review annually.</li>
          </ol>

          <h2>Sources & further reading</h2>
          <ul>
            <li><a className="underline" href="https://oakharvestfg.com/wp-content/uploads/2022/05/BlackRock-White-Paper.pdf?x85886=" target="_blank" rel="noreferrer">BlackRock: A Case for Fixed Indexed Annuities in Accumulation (PDF)</a></li>
            <li><a className="underline" href="https://www.finra.org/investors/insights/complicated-risks-and-rewards-indexed-annuities" target="_blank" rel="noreferrer">FINRA: Risks & rewards of indexed annuities</a></li>
            <li><a className="underline" href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/updated-investor-bulletin-indexed-annuities" target="_blank" rel="noreferrer">Investor.gov: Indexed annuities bulletin</a></li>
            <li><a className="underline" href="https://www.blackrock.com/us/financial-professionals/insights/positioning-for-retirement" target="_blank" rel="noreferrer">BlackRock: Positioning for retirement</a></li>
          </ul>

          <hr />
          <p className="text-xs text-slate-500">
            FIAs are insurance products. Guarantees are backed by the insurer. This is educational content, not individualized advice.
          </p>
        </section>
      </article>
    </main>
  );
}
