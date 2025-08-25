// src/pages/ResourcesInsightsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import BlogIndex from "./BlogIndex";
import Footer from "./components/Footer";

export default function ResourcesInsightsPage() {
  return (
    // Apply bg-slate-50 so it covers the entire page
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <GuidesAndWhitePapers />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background for hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 via-white to-slate-100"
      />
      {/* Decorative blur blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
            Resource Hub
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Resources &amp; Insights
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Plain-English guides, research summaries, and practical checklists to
            help employers and families make confident decisions about benefits,
            supplemental coverage, and retirement planning.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#guides"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Explore Guides
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Talk to a Specialist
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 text-xs text-slate-500 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
              ✅ Compliance-first approach
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
              📚 Research-informed summaries
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
              🔒 Privacy &amp; HIPAA-aligned notices
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuidesAndWhitePapers() {
  return (
    <>
    <section id="guides" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Educational Guides &amp; White Papers
        </h2>
        <p className="mt-3 text-slate-600">
          Download concise, compliance-minded explainers. Each guide includes examples, pitfalls to avoid, and a simple checklist.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GuideCard
          title="Understanding Section 125 & FICA Savings"
          tag="Compliance Guide"
          time="8-minute read"
          to="/guides/section-125-fica"
          summary={[
            "How cafeteria plans enable pre-tax payroll elections and reduce employer/employee FICA exposure.",
            "What a compliant Section 125 setup looks like (eligibility, election changes, documentation).",
            "Red flags: beware of “tax-free reimbursements” schemes outside IRS rules.",
          ]}
        />

        <GuideCard
          title="Fixed Indemnity Plan Buyer’s Guide"
          tag="Plan Education"
          time="7-minute read"
          to="/guides/fixed-indemnity"
          summary={[
            "What fixed indemnity plans cover: fixed-dollar benefits for covered events.",
            "How to size benefit amounts and integrate with existing coverage.",
            "Clear warning: supplemental only — not a substitute for major medical.",
          ]}
        />

        <GuideCard
          title="Safe Growth for Retirement (FIAs)"
          tag="Retirement Insight"
          time="6-minute read"
          to="/guides/fia-safe-growth"
          summary={[
            "How FIAs can convert increased take-home pay into long-term, tax-deferred growth.",
            "Understanding index crediting, caps/spreads, and principal protection trade-offs.",
            "Portfolio role: improving downside protection and smoothing returns.",
          ]}
        />
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
        <p className="mb-2 font-semibold">Important Notes & Disclosures</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Section 125 benefits require proper plan documents and administration; consult tax and legal advisors.</li>
          <li>Fixed indemnity plans are supplemental and do not meet minimum essential coverage requirements.</li>
          <li>FIAs are long-term insurance products with features, limitations, and charges. Consider surrender periods, riders, and your time horizon.</li>
        </ul>
      </div>
    </section>
   <BlogIndex/>
   <Footer />
    </>
  );
}

function GuideCard({ title, tag, time, summary = [], to }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">{tag}</span>
        <span className="text-[11px] text-slate-500">•</span>
        <span className="text-[11px] text-slate-500">{time}</span>
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-700">
        {summary.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <div className="mt-6 flex flex-1 items-end justify-between gap-3">
        <Link
          to={to}
          className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Read the guide
        </Link>
        <a
          href={to + "?download=pdf"}
          className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Download PDF
        </a>
      </div>
    </article>
  );
}
