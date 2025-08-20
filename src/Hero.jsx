import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import Navigation from './Navigation';
import WhyWeExist from './WhyWeExist';
import TestimonialsAuto from './TestimonialsAuto';

// SVG Icons
const IconCheck = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const IconShieldHeart = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

// Healthcare Illustration Component
const HealthcareIllustration = ({ prefersReducedMotion }) => (
  <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
    {/* Background Grid */}
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>

    {/* Floating Shapes */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-60"
      animate={prefersReducedMotion ? {} : {
        y: [-10, 10, -10],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg opacity-70"
      animate={prefersReducedMotion ? {} : {
        y: [10, -10, 10],
        rotate: [0, -5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Heart Shield Motif */}
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      animate={prefersReducedMotion ? {} : {
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="relative">
        {/* Shield Background */}
        <div className="w-32 h-40 bg-gradient-to-b from-blue-500 to-teal-500 rounded-t-full opacity-80">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-teal-400 rounded-t-full transform scale-95"></div>
        </div>
        
        {/* Heart */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
    </motion.div>

    {/* Decorative Elements */}
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-50"
      animate={prefersReducedMotion ? {} : {
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
);

// Trust Strip Component
const TrustStrip = () => (
  <div className="mt-8 text-center">
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Trusted by employers & families nationwide</p>
    <div className="flex justify-center items-center space-x-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded opacity-60"
          aria-hidden="true"
        />
      ))}
    </div>
  </div>
);

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: prefersReducedMotion ? {} : {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: prefersReducedMotion ? {} : {
      scale: 0.95
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-teal-800">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={prefersReducedMotion ? {} : {
              background: [
                "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
                variants={itemVariants}
                data-qa="hero-title"
              >
                Better Health. Bigger Paychecks. Smarter Protection.
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8"
                variants={itemVariants}
              >
                Offer two paths to affordable healthcare:
              </motion.p>

              <motion.ul
                className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
                variants={itemVariants}
              >
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <IconCheck />
                  </div>
                  <span className="text-sm sm:text-base text-blue-100">
                    <strong>For Businesses:</strong> Add zero-net-cost virtual health benefits and lower your payroll taxes.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <IconShieldHeart />
                  </div>
                  <span className="text-sm sm:text-base text-blue-100">
                    <strong>For Individuals & Families:</strong> Get lower-cost health protection with no deductibles.
                  </span>
                </li>
              </motion.ul>

              <motion.p
                className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8"
                variants={itemVariants}
              >
                Not insurance advice. For educational purposes only.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.a
                  href="/employers"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 text-sm sm:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setIsHovered('employers')}
                  onHoverEnd={() => setIsHovered(null)}
                  data-qa="cta-employers"
                  aria-label="Learn about employer health plans"
                >
                  Learn About Employer Plan
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>

                <motion.a
                  href="/individuals"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-indigo-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 text-sm sm:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setIsHovered('individuals')}
                  onHoverEnd={() => setIsHovered(null)}
                  data-qa="cta-individuals"
                  aria-label="Explore individual health plans"
                >
                  Explore Individual Plans
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <TrustStrip />
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="hidden lg:block relative order-1 lg:order-2"
              variants={itemVariants}
            >
              <HealthcareIllustration prefersReducedMotion={!!prefersReducedMotion} />
            </motion.div>
          </div>
        </div>

        {/* Subtle Glow Effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 blur-3xl" />
          </motion.div>
                 )}
       </section>
       <WhyWeExist />
       <TestimonialsAuto/>
     </>
   );
 }
