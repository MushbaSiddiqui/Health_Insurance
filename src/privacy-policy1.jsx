import React from "react";
import { ShieldCheck, FileText } from "lucide-react"; // lucide-react icons

export default function PrivacyHIPAA({ className = "" }) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 ${className}`}
      aria-labelledby="privacy-hipaa-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Privacy & HIPAA
          </div>
          <h2
            id="privacy-hipaa-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900"
          >
            Protecting Your Personal Health Information
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We comply fully with HIPAA regulations and federal privacy laws to
            safeguard your personal health information (PHI). Your data is stored
            securely, encrypted in transit and at rest, and accessed only by
            authorized personnel. Our systems are routinely audited to ensure
            compliance and maintain trust.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
            <ShieldCheck className="h-8 w-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900">
              HIPAA Compliance
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We follow HIPAA’s Privacy and Security Rules, ensuring PHI is
              safeguarded against unauthorized use or disclosure.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
            <ShieldCheck className="h-8 w-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900">
              Data Encryption
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              All sensitive information is encrypted in transit (SSL/TLS) and at
              rest, protecting your data from breaches or leaks.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
            <ShieldCheck className="h-8 w-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900">
              Access Control
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Only authorized staff with role-based permissions can access PHI,
              minimizing exposure and maintaining confidentiality.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
        <a
  href="/privacy-policy"
  target="_blank"     // open in new tab
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-emerald-700 transition"
>
  <FileText className="h-5 w-5" />
  Read Our Full Privacy Policy
</a>
          <p className="mt-3 text-sm text-slate-500">
            Learn more about our data handling practices, HIPAA compliance, and
            your rights.
          </p>
        </div>
      </div>
    </section>
  );
}
