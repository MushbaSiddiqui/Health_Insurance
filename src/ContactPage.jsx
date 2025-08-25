// ContactPage.jsx
// Hero + Get in Touch sections for Contact page
// Tech: React + TailwindCSS + Framer Motion

import React from "react";
import { motion } from "framer-motion";
import CustomerService from "./CustomerService";
import Footer from "./components/Footer";

export function ContactHero({
  bgUrl = "/images/Contact.jpg",
  headline = "Talk to a Benefits Specialist",
  subhead = "Whether you're an employer or an individual, we're here to help you navigate affordable, compliant coverage.",
}) {
  return (
    <section
      id="contact-hero"
      aria-labelledby="contact-hero-title"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <img
  src={bgUrl}
  alt=""
  aria-hidden="true"
  className="absolute inset-0 -z-20 h-full w-full object-cover"
/>

{/* Bluish overlay */}
<div className="absolute inset-0 -z-10 bg-blue-900/60 mix-blend-multiply" />
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/80 via-slate-900/70 to-sky-900/70" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px), radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
          color: "white",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
        >
          We reply within 1 business day
        </motion.div>

        <motion.h1
          id="contact-hero-title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 max-w-3xl text-3xl sm:text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90"
        >
          {subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-3"
        >
          <a
            href="#get-in-touch"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 sm:px-6 py-3 font-semibold text-slate-900 shadow-lg ring-1 ring-black/5 transition hover:scale-[1.02] text-sm sm:text-base"
          >
            Get in Touch
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="tel:+18001234567"
            className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 sm:px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20 text-sm sm:text-base"
          >
            Call Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function GetInTouch({
  employerPhone = "+1 (800) 123-4567",
  employerEmail = "benefits@yourcompany.com",
  employerCalendly = "https://calendly.com/your-calendly/employer-consult",
  individualPhone = "+1 (800) 555-0199",
  individualEmail = "agents@yourcompany.com",
  individualQuoteUrl = "/quote",
}) {
  const Card = ({ title, children, accentFrom, accentTo }) => (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl"
    >
      {/* Accent ribbon */}
      <div
        className={`absolute -left-12 -top-12 h-32 w-40 rotate-12 rounded-2xl bg-gradient-to-br ${accentFrom} ${accentTo} opacity-10`}
      />
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
    </motion.article>
  );

  const Row = ({ href, label, sr, targetBlank }) => (
    <a
      href={href}
      {...(targetBlank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group mt-3 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow"
    >
      {/* simple icon */}
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
      <span>{label}</span>
      {sr ? <span className="sr-only">{sr}</span> : null}
    </a>
  );

  const Pill = ({ text }) => (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
      {text}
    </span>
  );

  return (
    <>
    <section
      id="get-in-touch"
      aria-labelledby="get-in-touch-title"
      className="relative py-20"
    >
      {/* background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <motion.h2
            id="get-in-touch-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Choose the option that fits you best—our team will guide you step by step.
          </motion.p>

          {/* quick trust badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Pill text="Licensed & Compliant" />
            <Pill text="Fast Response" />
            <Pill text="No Hidden Fees" />
          </div>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Employers */}
          <Card
            title="For Employers"
            accentFrom="from-indigo-400"
            accentTo="to-sky-400"
          >
            <p>
              Book a free consultation with our benefits specialists. We’ll review your goals,
              budgets, and compliance requirements to recommend the right approach.
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <Row href={`tel:${employerPhone.replace(/[^\d+]/g, "")}`} label={`Call: ${employerPhone}`} />
              <Row href={`mailto:${employerEmail}`} label={`Email: ${employerEmail}`} />
              <Row
                href={employerCalendly}
                label="Book on Calendly"
                targetBlank
                sr="Opens Calendly in a new tab"
              />
            </div>

            {/* mini list */}
            <ul className="mt-5 list-inside list-disc text-sm text-slate-600">
              <li>Tax-advantaged plan design (Section 125)</li>
              <li>Transparent pricing and plan comparisons</li>
              <li>Employee onboarding & communications</li>
            </ul>
          </Card>

          {/* Individuals & Families */}
          <Card
            title="For Individuals & Families"
            accentFrom="from-emerald-400"
            accentTo="to-teal-400"
          >
            <p>
              Request a quote online or speak with a licensed agent to compare options for your needs and budget.
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <Row href={individualQuoteUrl} label="Request a Quote Online" />
              <Row href={`tel:${individualPhone.replace(/[^\d+]/g, "")}`} label={`Call: ${individualPhone}`} />
              <Row href={`mailto:${individualEmail}`} label={`Email: ${individualEmail}`} />
            </div>

            <ul className="mt-5 list-inside list-disc text-sm text-slate-600">
              <li>Lower-cost coverage options</li>
              <li>Telehealth & virtual care access</li>
              <li>Guidance on eligibility and timing</li>
            </ul>
          </Card>
        </div>

        {/* compliance note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-sm leading-6 text-emerald-900"
        >
          We adhere to IRS Section 125, ACA, ERISA, and applicable state insurance regulations.
          Your information is handled securely and never sold.
        </motion.div>
      </div>
    </section>
    <CustomerService/>
    <Footer />
    </>
  );
}

export default function ContactPage(props) {
  return (
    <>
      <ContactHero />
      <GetInTouch {...props} />
    </>
  );
}
