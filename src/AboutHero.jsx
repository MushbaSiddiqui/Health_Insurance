// src/AboutHero.jsx
// Polished “About Us” hero for a health-insurance site
// Tech: React + TailwindCSS + Framer Motion (optional but nice)

import React from "react";
import { motion } from "framer-motion";
import OurStory from './OurStory';
import MeetLeadership from './MeetLeadership';
import OurValues from "./OurValues";
import Footer from "./components/Footer";

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop"; // placeholder

export default function AboutHero({
  bgUrl = DEFAULT_BG,
  onPrimary,
  onSecondary,
  className = "",
}) {
  return (
    <>
    <section
      className={`relative overflow-hidden ${className}`}
      aria-labelledby="about-hero-title"
    >
      {/* Background image */}
      <img
        src={bgUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Color wash + subtle pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-900/80 via-indigo-900/70 to-slate-900/70" />
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
        {/* Eyebrow / breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="mb-4 sm:mb-6 text-sm text-white/70"
        >
          <ol className="flex items-center gap-2">
            <li>
              <a href="/" className="hover:text-white/90">
                Home
              </a>
            </li>
            <li aria-hidden>›</li>
            <li className="text-white/90">About Us</li>
          </ol>
        </motion.nav>

        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
            >
              Since 2014 • Member-first benefits
            </motion.div>

            <motion.h1
              id="about-hero-title"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 text-3xl sm:text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            >
              Better Health Coverage, Built Around People
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90"
            >
              We're a team of clinicians, benefits specialists, and product
              builders focused on making healthcare simple. From $0-copay
              virtual care to transparent fixed indemnity benefits, our mission
              is to help families and employers save money without sacrificing
              access or quality.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#our-story"
                onClick={onPrimary}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg ring-1 ring-black/5 transition hover:scale-[1.02]"
              >
                Our Mission
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
                href="#leadership"
                onClick={onSecondary}
                className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Meet the Team
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="mt-10 grid grid-cols-2 gap-4 text-white/90 sm:grid-cols-3"
            >
              {[
                { k: "50-state footprint", v: "Licensed network access" },
                { k: "2M+ virtual visits", v: "Telehealth powered care" },
                { k: "A+ support", v: "24/7 member help" },
              ].map((s) => (
                <li
                  key={s.k}
                  className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur"
                >
                  <div className="text-sm">{s.k}</div>
                  <div className="text-xs text-white/70">{s.v}</div>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: floating card cluster */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md">
              {/* floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="absolute -left-10 top-10 hidden w-40 rounded-2xl bg-white/90 p-4 text-slate-800 shadow-2xl ring-1 ring-black/5 backdrop-blur sm:block"
              >
                <p className="text-sm font-semibold">$0-Copay Virtual Care</p>
                <p className="mt-1 text-xs text-slate-600">
                  24/7 primary & urgent care.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ duration: 0.7, delay: 0.26 }}
                className="absolute -right-4 top-36 hidden w-44 rounded-2xl bg-white/90 p-4 text-slate-800 shadow-2xl ring-1 ring-black/5 backdrop-blur sm:block"
              >
                <p className="text-sm font-semibold">Transparent Cash Benefits</p>
                <p className="mt-1 text-xs text-slate-600">
                  Fixed indemnity payouts you control.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.14 }}
                className="relative rounded-3xl bg-white/90 p-5 text-slate-900 shadow-2xl ring-1 ring-black/5 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M12 2 4 6v5c0 5 3.6 9.4 8 11 4.4-1.6 8-6 8-11V6l-8-4zM7 11h10v2H7v-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">About InspirZhealth</div>
                    <p className="text-xs text-slate-600">
                      We blend preventive virtual care with fixed indemnity
                      benefits to help people and businesses prosper.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <OurStory/>
    <MeetLeadership/>
    <OurValues/>
    <Footer />
    </>
  );
}
