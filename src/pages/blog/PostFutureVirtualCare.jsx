// src/pages/blog/PostFutureVirtualCare.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PostFutureVirtualCare() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-sky-50/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs text-sky-700">Virtual Care</p>
          <h1 className="mt-1 text-3xl font-bold">
            The Future of Virtual Healthcare: How Included Health &amp; Teladoc Are Shaping It
          </h1>
          <p className="mt-2 max-w-3xl text-slate-600">
            Virtual primary care is evolving into longitudinal, team-based care that connects diagnostics, specialty access,
            and benefits navigation—reducing friction and unnecessary high-cost care.
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
          <h2>From one-off visits to integrated primary care</h2>
          <p>
            Leaders like <a href="https://includedhealth.com/" target="_blank" rel="noreferrer">Included Health</a> are packaging navigation,
            primary and mental health care, second opinions, and billing advocacy into a single experience—migrating virtual care from
            “visit-based” to an integrated primary care relationship. See their explanation of{" "}
            <a href="https://includedhealth.com/resources/what-is-virtual-primary-care/" target="_blank" rel="noreferrer">
              what virtual primary care means
            </a>{" "}
            and their Specialty Care Clinic announcement that aims to accelerate access to experts and reduce costs.
            <a href="https://includedhealth.com/announcements/included-health-introduces-the-specialty-care-clinic/" target="_blank" rel="noreferrer">
              Read more
            </a>.
          </p>

          <h3>Measurable impact from virtual primary care</h3>
          <p>
            <a href="https://www.teladochealth.com/expert-care/primary-care" target="_blank" rel="noreferrer">Teladoc Primary360</a> positions virtual primary care
            as a front door to the system, with reported reductions in emergency department use and improved care navigation. Teladoc reports a{" "}
            <a href="https://www.teladochealth.com/organizations/resources/primary360-report" target="_blank" rel="noreferrer">19% reduction</a> in ED visits in a large health plan sub-analysis and strong member satisfaction,
            with integrated referrals across nutrition, mental health, dermatology, and in-person care.
            <a href="https://www.teladochealth.com/organizations/health-plans/primary-care" target="_blank" rel="noreferrer"> See details</a>.
          </p>

          <h2>What to watch</h2>
          <ul>
            <li>Speed to specialty and diagnostics (e.g., in-home testing, faster expert opinions).</li>
            <li>Care navigation & benefits coordination baked into the visit flow.</li>
            <li>Data pipes: closing loops across primary, specialty, and community resources.</li>
          </ul>

          <hr />
          <p className="text-xs text-slate-500">
            Sources linked above; virtual care offerings vary by plan and state.
          </p>
        </section>
      </article>
    </main>
  );
}
