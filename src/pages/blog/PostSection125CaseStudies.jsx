// src/pages/blog/PostSection125CaseStudies.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PostSection125CaseStudies() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-indigo-50/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs text-indigo-700">Benefits Strategy</p>
          <h1 className="mt-1 text-3xl font-bold">Section 125 in Action: Small-Business Case Studies</h1>
          <p className="mt-2 max-w-3xl text-slate-600">
            Modeled scenarios showing how cafeteria plans can add benefits without raising salaries—while following IRS rules.
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
          <h2>Case A: 25-employee marketing firm (premium-only plan)</h2>
          <p>
            Employer adopts a <strong>premium-only</strong> Section 125 plan so employees can pay their share of group medical
            premiums pre-tax. Assuming $300/month average employee contribution and a 7.65% FICA rate, the employer may avoid
            roughly $573/month in payroll tax across 25 participants (25 × $300 × 7.65%). Employees save income/FICA taxes too.
            See IRS cafeteria plan basics and employer payroll tax effects from{" "}
            <a href="https://www.irs.gov/government-entities/federal-state-local-governments/faqs-for-government-entities-regarding-cafeteria-plans" target="_blank" rel="noreferrer">
              IRS FAQs
            </a>{" "}
            and{" "}
            <a href="https://www.adp.com/resources/articles-and-insights/articles/s/section-125-cafeteria-plan.aspx" target="_blank" rel="noreferrer">
              ADP’s overview
            </a>.
          </p>

          <h2>Case B: 40-employee retailer (add health FSA)</h2>
          <p>
            The retailer layers a health FSA with a conservative cap to avoid discrimination pitfalls. Employees fund eligible
            out-of-pocket expenses pre-tax; employer FICA savings scale with participation. Administration includes plan docs,
            prospective elections, and substantiation controls.
          </p>

          <h2>Case C: 15-employee services firm (exclude ineligible owners)</h2>
          <p>
            The firm reviews ownership: &gt;2% S-corp shareholders are not treated as employees for cafeteria plan eligibility and are excluded.
            This avoids compliance errors while still delivering pre-tax benefits to rank-and-file employees.
          </p>

          <h3>Implementation checklist</h3>
          <ul>
            <li>Adopt written plan docs; define eligible benefits and classes.</li>
            <li>Run nondiscrimination testing and schedule reviews.</li>
            <li>Coordinate payroll codes and employee communications.</li>
            <li>Ensure owner eligibility rules are applied correctly.</li>
          </ul>

          <hr />
          <p className="text-xs text-slate-500">
            Scenarios are illustrative, not guarantees. Verify eligibility and tax treatment with counsel and payroll.
          </p>
        </section>
      </article>
    </main>
  );
}
