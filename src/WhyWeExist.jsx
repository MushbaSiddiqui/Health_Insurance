import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

// SVG Icons and Illustrations
const IconShieldHeart = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const IconTelehealth = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const IconFamily = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.99 2.5V18h-2v-6h-2v6H9V13.5L7.01 11A2.01 2.01 0 0 0 5 10H3.5c-.8 0-1.54.37-2.01 1L0 16.5V18h2v-1.5l1.49-2.5H5v6h2v-6h1.5l2.5 4H12v-6h2v6h2.5l2.5-4H20v6h2z" />
  </svg>
);

const BgBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* very subtle tint on white */}
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-teal-400/10 rounded-full blur-2xl" />
    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl" />
  </div>
);

const DottedGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 text-slate-400" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dots)" />
  </svg>
);

const HeartShieldIllustration = ({ prefersReducedMotion }) => (
  <figure className="relative w-full h-64 lg:h-80">
    <div className="relative w-full h-full">
      <DottedGrid />
      <BgBlobs />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [-5, 5, -5],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative">
          {/* Shield Background */}
          <div className="w-24 h-32 bg-gradient-to-b from-indigo-600 to-teal-600 rounded-t-full shadow-md">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-400 to-teal-400 rounded-t-full scale-95 opacity-80" />
          </div>

          {/* Heart */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
    <figcaption className="sr-only">Healthcare protection illustration with heart and shield motif</figcaption>
  </figure>
);

export default function WhyWeExist() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hover: prefersReducedMotion ? {} : { y: -8, scale: 1.02, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: prefersReducedMotion ? {} : { scale: 1.05, transition: { duration: 0.2 } },
    tap: prefersReducedMotion ? {} : { scale: 0.95 },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Background Accents on White */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {/* Top Block - Why We Exist */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants}>
              <motion.h3 className="text-sm font-semibold text-teal-700 uppercase tracking-wide mb-4" variants={itemVariants}>
                Our Mission
              </motion.h3>

              <motion.h2
                className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900"
                variants={itemVariants}
                data-qa="why-title"
              >
                Why We Exist
              </motion.h2>

              <motion.p className="text-lg text-slate-600 leading-relaxed" variants={itemVariants}>
                Affordable healthcare and financial wellness shouldn't be mutually exclusive. Our mission is to empower employers, families and individuals with
                solutions that lower costs, increase access to care and comply with U.S. regulations. We blend preventive virtual health and fixed indemnity insurance
                to deliver benefits that help people and businesses prosper.
              </motion.p>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div variants={itemVariants}>
              <HeartShieldIllustration prefersReducedMotion={!!prefersReducedMotion} />
            </motion.div>
          </div>

          {/* Divider Heading */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900">Two Solutions – Two Audiences</h3>
          </motion.div>

          {/* Bottom Block - Solution Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Card A - Employers */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard('employers')}
              onHoverEnd={() => setHoveredCard(null)}
              data-qa="card-employers"
            >
              <motion.div
                className="relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200"
                variants={cardVariants}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-sm">
                    <IconTelehealth />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Pre-Tax Virtual Health Plan (Employers)</h4>
                    <p className="text-slate-600">
                      Section 125–compliant program that delivers unlimited telehealth, mental health support and other wellness benefits at no net cost to the
                      business or employees. Employers save payroll taxes and employees take home more money.
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <IconShieldHeart />
                    <span>Section 125–compliant</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <IconShieldHeart />
                    <span>Unlimited telehealth</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <IconShieldHeart />
                    <span>No net cost</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <IconShieldHeart />
                    <span>Payroll tax savings</span>
                  </li>
                </ul>

                <motion.a
                  href="/employers"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  data-qa="cta-employers"
                  aria-label="Learn about employer health plans"
                >
                  Learn About Employer Plan
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Card B - Individuals */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard('individuals')}
              onHoverEnd={() => setHoveredCard(null)}
              data-qa="card-individuals"
            >
              <motion.div
                className="relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200"
                variants={cardVariants}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center text-white shadow-sm">
                    <IconFamily />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Fixed Defined Indemnity Plan (Individuals &amp; Families)</h4>
                    <p className="text-slate-600">
                      Low-cost health insurance that pays fixed cash benefits per service, helping cover doctor visits, surgeries and hospital stays. Premiums are
                      40–60% lower than major medical plans, with no deductibles, copays or coinsurance.
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <IconShieldHeart />
                    <span>Fixed cash benefits</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <IconShieldHeart />
                    <span>40–60% lower premiums</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <IconShieldHeart />
                    <span>No deductibles/copays/coinsurance</span>
                  </li>
                </ul>

                <motion.a
                  href="/individuals"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  data-qa="cta-individuals"
                  aria-label="Explore individual health plans"
                >
                  Explore Individual Plans
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Optional Caption */}
          <motion.p className="text-center text-sm text-slate-500" variants={itemVariants}>
            Not insurance advice. For educational purposes only.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
