// src/EmployeesGetHero.jsx
import { motion, useReducedMotion } from "framer-motion";

/** Dummy avatars — replace with your own assets */
const AV1 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop";
const AV2 = "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop";
const AV3 = "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop";

/** Small inline icons */
const Check = (p) => (<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...p}><path d="M7.6 14.2 3.4 10l1.6-1.6 2.6 2.6 7.4-7.4L16.6 5l-9 9.2z"/></svg>);
const Pill = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><rect x="3" y="6" width="18" height="12" rx="6"/><rect x="12" y="6" width="9" height="12" rx="6" fill="#fff" opacity=".25"/></svg>);
const Heart = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12 21s-8-5.4-8-10.5S8 2 12 7.2C16 2 20 4.5 20 10.5S12 21 12 21z"/></svg>);
const Stetho = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M6 3v6a4 4 0 008 0V3h-2v6a2 2 0 11-4 0V3H6zM18 10a3 3 0 00-3 3v3a4 4 0 11-4 4h2a2 2 0 104-2v-5a1 1 0 011-1h2v-2h-2z"/></svg>);
const Brain = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M8 3a3 3 0 00-3 3v.5A3.5 3.5 0 002 10v1a3 3 0 003 3v1a3 3 0 003 3h2V3H8zm8 0h-2v15h2a3 3 0 003-3v-1a3 3 0 003-3v-1a3.5 3.5 0 00-3-3.5V6a3 3 0 00-3-3z"/></svg>);
const Lab = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M10 2v6L4 20a2 2 0 002 2h12a2 2 0 002-2L14 8V2h-4z"/></svg>);
const Family = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><circle cx="8" cy="8" r="3"/><circle cx="16" cy="9.5" r="3"/><path d="M3 22v-2.5A4.5 4.5 0 017.5 15H9a4 4 0 014 4v3H3zm11 0v-2a3 3 0 013-3h2.5A2.5 2.5 0 0122 19.5V22h-8z"/></svg>);

/** Animations */
const container = (r) => ({ hidden:{opacity:0}, show:{opacity:1, transition:{when:"beforeChildren", staggerChildren:r?0:0.14}}});
const item = (r) => ({ hidden:{opacity:0, y:14}, show:{opacity:1, y:0, transition:{duration:r?0:0.5, ease:"easeOut"}}});
const float = (r, y=8, d=6) => r ? {} : { y:[0,-y,0], transition:{duration:d, repeat:Infinity, ease:"easeInOut"} };

/** Pill chip for right-side UI */
const PillCard = ({ icon: Icon, label, tone="indigo" }) => {
  const tones = { indigo:"bg-indigo-600", emerald:"bg-emerald-600", sky:"bg-sky-600", violet:"bg-violet-600" };
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md ring-1 ring-slate-200">
      <span className={`grid h-6 w-6 place-items-center rounded-full ${tones[tone]} text-white`}>
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="text-sm font-medium text-slate-800">{label}</span>
    </div>
  );
};

/** Subtle dotted grid background (no blur) */
const DotsBg = () => (
  <svg className="absolute inset-0 h-full w-full text-slate-200/70" aria-hidden="true">
    <defs>
      <pattern id="dotsi" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
      <radialGradient id="glow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="rgb(186 230 253 / 0.6)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotsi)" />
    {/* soft glows */}
    <circle cx="20%" cy="25%" r="180" fill="url(#glow)" />
    <circle cx="85%" cy="65%" r="200" fill="url(#glow)" />
  </svg>
);

export default function EmployeesGetHero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* page-level accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <motion.div
          variants={container(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          {/* LEFT: Headline & bullets */}
          <div>
            <motion.h2 variants={item(reduced)} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              What <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">Employees Get</span>
            </motion.h2>

            <motion.div variants={item(reduced)} className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Unlimited Virtual Doctor Visits – Primary and urgent care via phone, video or chat 24/7.",
                "Mental Health & Coaching – Confidential counseling and holistic coaching for stress, anxiety, nutrition and chronic conditions.",
                "No Copays or Deductibles – Employees access care without out-of-pocket costs.",
                "Prescription Discount Program – Up to 50–75% off select medications.",
                "Preventive Care & Labs – Health screenings, biometric assessments and Quest Diagnostics lab access.",
                "Family Coverage – Spouses and dependents can use the same telehealth services, including virtual veterinary care and Zig Ziglar coaching.",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 rounded-xl p-2">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-slate-700">{t}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item(reduced)} className="mt-8">
              <a
                href="/individuals"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Explore Benefits
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M7 4l6 6-6 6V4z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Floating UI on a clean background (no blur) */}
          <div className="relative mx-auto h-[380px] w-full max-w-[560px] rounded-3xl border border-slate-200 bg-white shadow-xl">
            {/* dotted grid + soft glows */}
            <DotsBg />

            {/* avatars */}
            <motion.img
              src={AV1}
              alt="Member"
              className="absolute left-6 top-4 h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-md"
              animate={float(reduced, 6, 7)}
            />
            <motion.img
              src={AV2}
              alt="Member"
              className="absolute right-6 top-24 h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-md"
              animate={float(reduced, 8, 6.5)}
            />
            <motion.img
              src={AV3}
              alt="Member"
              className="absolute right-24 bottom-20 h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-md"
              animate={float(reduced, 7, 7.5)}
            />

            {/* floating feature pills */}
            <motion.div className="absolute left-4 top-28" animate={float(reduced, 10, 8)}>
              <PillCard icon={Stetho} label="24/7 Doctor" tone="sky" />
            </motion.div>
            <motion.div className="absolute right-4 top-6" animate={float(reduced, 9, 7)}>
              <PillCard icon={Brain} label="Mental Wellness" tone="violet" />
            </motion.div>
            <motion.div className="absolute left-10 bottom-6" animate={float(reduced, 8, 6.5)}>
              <PillCard icon={Pill} label="Rx Discounts 50–75%" tone="indigo" />
            </motion.div>
            <motion.div className="absolute right-2 bottom-28" animate={float(reduced, 10, 8.5)}>
              <PillCard icon={Lab} label="Preventive Labs" tone="emerald" />
            </motion.div>
            <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" animate={float(reduced, 6, 7)}>
              <PillCard icon={Heart} label="No Copays" tone="emerald" />
            </motion.div>
            <motion.div className="absolute right-8 -bottom-3" animate={float(reduced, 7, 6.8)}>
              <PillCard icon={Family} label="Family & Pets" tone="sky" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
