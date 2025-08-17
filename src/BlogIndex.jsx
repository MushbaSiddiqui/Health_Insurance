// src/pages/blog/BlogIndex.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BlogIndex() {
  const posts = [
    {
      title: "The Future of Virtual Healthcare: How Included Health & Teladoc Are Shaping It",
      excerpt:
        "Virtual primary care is moving beyond one-off visits toward integrated, longitudinal care. Here’s what the leaders are building—and why it matters.",
      to: "/blog/future-of-virtual-care",
      tag: "Virtual Care",
      read: "8 min read",
    },
    {
      title: "How $39/Month Telehealth Plans Can Cut Primary Care Costs",
      excerpt:
        "Membership telehealth can lower out-of-pocket costs and reduce urgent care/ED usage—if you know what’s included and what’s not.",
      to: "/blog/telehealth-39-dollar-plans",
      tag: "Cost & Access",
      read: "6 min read",
    },
    {
      title: "Avoiding ‘Double Dip’ Tax Schemes in Wellness Programs",
      excerpt:
        "The IRS has warned (again) about arrangements promising tax-free cash reimbursements. Learn the rules—and the red flags.",
      to: "/blog/wellness-program-double-dip",
      tag: "Compliance",
      read: "7 min read",
    },
    {
      title: "Section 125 in Action: Small-Business Case Studies",
      excerpt:
        "Realistic scenarios showing how cafeteria plans add benefits without raising salary costs—while staying compliant.",
      to: "/blog/section-125-small-business-case-studies",
      tag: "Benefits Strategy",
      read: "7 min read",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog &amp; News</h1>
          <p className="mt-2 max-w-3xl text-slate-600">
            Research-backed commentary on virtual care, benefits compliance, and employer strategy.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.to} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 font-medium text-slate-700">
                  {p.tag}
                </span>
                <span>•</span>
                <span>{p.read}</span>
              </div>
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{p.excerpt}</p>
              <div className="mt-5 flex-1" />
              <div className="mt-5">
                <Link
                  to={p.to}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
