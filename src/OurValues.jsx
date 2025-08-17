// src/OurValues.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HandHeart, Cpu, Scale } from "lucide-react";

const VALUES = [
  {
    title: "Integrity",
    desc: "No hidden fees or tax gimmicks.",
    icon: ShieldCheck,
    accent: "emerald",
  },
  {
    title: "Accessibility",
    desc: "Affordable healthcare for employees, families and individuals.",
    icon: HandHeart,
    accent: "indigo",
  },
  {
    title: "Innovation",
    desc: "Harness technology (apps, telehealth, AI) to improve care.",
    icon: Cpu,
    accent: "violet",
  },
  {
    title: "Compliance",
    desc: "Follow Section 125, ACA, ERISA and state insurance regulations.",
    icon: Scale,
    accent: "sky",
  },
];

export default function OurValues() {
  return (
    <section
      aria-labelledby="our-values"
      className="relative isolate overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <motion.h2
            id="our-values"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Our Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            What guides our decisions every day—across plan design, pricing,
            technology, and service.
          </motion.p>
        </header>

        {/* Values grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.article
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-700" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {v.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  {v.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
