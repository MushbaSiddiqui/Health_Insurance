// src/CustomerService.jsx
import React, { useState } from "react";

export default function CustomerService({
  privacyUrl = "/privacy",
  termsUrl = "/terms",
  hipaaUrl = "/hipaa-notice",
  nondiscriminationUrl = "/non-discrimination",
  hours = [
    { day: "Mon–Fri", time: "9:00 AM – 6:00 PM (ET)" },
    { day: "Sat", time: "10:00 AM – 2:00 PM (ET)" },
    { day: "Sun", time: "Closed" },
  ],
}) {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    // Collect form data
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // TODO: Replace with your API / Make / n8n / GHL endpoint
    // Example: await fetch("/api/support", { method: "POST", body: form })

    // Fake delay to demonstrate success
    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    setStatus({
      type: "success",
      msg: "Thanks! Your message has been received. Our support team will reply within 1 business day.",
    });
    e.currentTarget.reset();
  }

  return (
    <section id="customer-service" className="relative py-20">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Customer Service
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Need help with your plan, claims, or enrollment? Send us a message and we’ll get back to you.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Left: Hours & Policies */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Hours of Operation</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between">
                    <span className="font-medium">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 h-px w-full bg-slate-100" />

              <h4 className="mt-6 text-base font-semibold text-slate-900">Policies & Notices</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="text-indigo-700 hover:underline" href={privacyUrl}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-indigo-700 hover:underline" href={termsUrl}>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a className="text-indigo-700 hover:underline" href={hipaaUrl}>
                    HIPAA Notice of Privacy Practices
                  </a>
                </li>
                <li>
                  <a className="text-indigo-700 hover:underline" href={nondiscriminationUrl}>
                    Non-Discrimination Notice
                  </a>
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900">
                Please don’t include sensitive Protected Health Information (PHI) in this form. If needed,
                we’ll provide a secure channel.
              </div>
            </div>
          </aside>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              noValidate
            >
              <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-slate-800">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-slate-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-800">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
                    placeholder="+1 (555) 555-1234"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="category" className="text-sm font-medium text-slate-800">
                    Topic
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
                    defaultValue="general"
                  >
                    <option value="general">General Question</option>
                    <option value="plan">Plan & Benefits</option>
                    <option value="claims">Claims</option>
                    <option value="billing">Billing</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-800">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
                    placeholder="Describe the issue or question…"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="inline-flex items-start gap-2 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>
                      I agree to the{" "}
                      <a className="text-indigo-700 underline" href={termsUrl}>
                        Terms of Use
                      </a>{" "}
                      and have read the{" "}
                      <a className="text-indigo-700 underline" href={privacyUrl}>
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>
              </fieldset>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  Typical response time: within 1 business day.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Submit"}
                </button>
              </div>

              {/* Status message (ARIA live region) */}
              <div
                aria-live="polite"
                className={`mt-4 text-sm ${
                  status.type === "success"
                    ? "text-emerald-700"
                    : status.type === "error"
                    ? "text-rose-700"
                    : "text-slate-600"
                }`}
              >
                {status.msg}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
