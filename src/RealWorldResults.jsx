import React from 'react';
import { motion } from 'framer-motion';

// Helper components
const TrendUpIcon = () => (
  <svg className="w-3 h-3 inline-block ml-1" viewBox="0 0 12 12" fill="currentColor">
    <path d="M2 8l3-3 2 2 3-3v6H2V8z"/>
  </svg>
);

const TrendDownIcon = () => (
  <svg className="w-3 h-3 inline-block ml-1" viewBox="0 0 12 12" fill="currentColor">
    <path d="M2 4l3 3 2-2 3 3V2H2v2z"/>
  </svg>
);

const Pill = ({ children, variant, icon }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variant}`}>
    {children}
    {icon}
  </span>
);

const RealWorldResults = () => {
  const results = [
    {
      id: 1,
      name: "N.O.",
      title: "Daycare Business Owner",
      callout: "increased cashflow and employee benefits.",
      testimonial: "Once Sam showed me the tax savings I was all in. Plus my employees are able to get healthcare benefits with no copays or deductible. Now I have cashflow to help grow my business.",
      photo: "/Images/owner.jpg",
      pills: [
        { text: "Cashflow ↑", variant: "bg-indigo-100 text-indigo-800", icon: <TrendUpIcon /> },
        { text: "Benefits ↑", variant: "bg-emerald-100 text-emerald-800", icon: <TrendUpIcon /> }
      ]
    },
    {
      id: 2,
      name: "S.K.",
      title: "Restaurant Owner (3 locations)",
      callout: "happier staff and increased paychecks.",
      testimonial: "I'm glad that I chose to offer this plan to my employees and my employees are excited to have benefits now and like the increase in their paycheck.",
      photo: "/Images/ovwner1.jpg",
      pills: [
        { text: "Happiness ↑", variant: "bg-sky-100 text-sky-800", icon: <TrendUpIcon /> },
        { text: "Pay ↑", variant: "bg-violet-100 text-violet-800", icon: <TrendUpIcon /> }
      ]
    },
    {
      id: 3,
      name: "G.K.",
      title: "Grocery Outlet Owner",
      callout: "reduced turnover and improved recruitment.",
      testimonial: "We were losing some of our best employees because we did not offer any benefits. Thankfully, we came across this plan and immediately saw the value of adding it for our employees. Not only did we stop losing employees, now we had a plan in place to help attract quality employers as well!",
      photo: "/Images/gk.jpg",
      pills: [
        { text: "Turnover ↓", variant: "bg-emerald-100 text-emerald-800", icon: <TrendDownIcon /> },
        { text: "Recruitment ↑", variant: "bg-indigo-100 text-indigo-800", icon: <TrendUpIcon /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
      aria-labelledby="results-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            id="results-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
          >
            Real-World Results
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch"
        >
          {results.map((result) => (
            <motion.div
              key={result.id}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
                             <div 
                 data-qa="results-card"
                 className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-200 h-full flex flex-col"
               >
                 {/* Photo */}
                 <div className="aspect-video overflow-hidden flex-shrink-0">
                   <img
                     src={result.photo}
                     alt={`${result.name}, ${result.title}`}
                     loading="lazy"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                   />
                 </div>

                 {/* Content */}
                 <div className="p-6 flex-1 flex flex-col">
                   <div className="mb-4">
                     <h3 className="font-bold text-gray-900 text-lg leading-tight">
                       {result.name}, {result.title}
                     </h3>
                     <p className="text-[15px] text-gray-600 leading-relaxed mt-2">
                       {result.callout}
                     </p>
                   </div>
                   
                   {/* Full Testimonial */}
                   <div className="mb-4 flex-1">
                     <blockquote className="text-sm text-gray-700 leading-relaxed italic border-l-4 border-indigo-200 pl-4 h-full">
                       "{result.testimonial}"
                     </blockquote>
                   </div>

                   {/* Pills */}
                   <div className="flex flex-wrap gap-2 mt-auto">
                     {result.pills.map((pill, index) => (
                       <Pill key={index} variant={pill.variant} icon={pill.icon}>
                         {pill.text}
                       </Pill>
                     ))}
                   </div>
                 </div>
               </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/testimonials"
            data-qa="results-cta"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-offset-2 transform hover:scale-105"
          >
            See All Success Stories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RealWorldResults;
