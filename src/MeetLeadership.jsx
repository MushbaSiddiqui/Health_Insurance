import { motion } from "framer-motion";

const LEADERS = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    headshot: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800",
    bio: "20+ years in insurance and employee benefits, building compliant, tax-advantaged plans for SMBs.",
    highlights: ["Benefits Strategy", "Regulatory Alignment", "SMB Growth"]
  },
  {
    name: "Jordan Patel",
    role: "Chief Financial Officer",
    headshot: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800",
    bio: "Former VP Finance at a national TPA. Ensures transparent pricing models and financial controls.",
    highlights: ["Risk Controls", "Actuarial Pricing", "Audit-Ready Reporting"]
  },
  {
    name: "Riley Chen",
    role: "Chief Technology Officer",
    headshot: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800",
    bio: "Ex-healthtech engineering lead. Builds secure, scalable platforms with PHI protection.",
    highlights: ["Security", "Data Governance", "HRIS Integrations"]
  }
];

const ASSOCIATIONS = [
  { name: "NAHU / NABIP", note: "Ethics & Education" },
  { name: "HIPAA Business Associate", note: "Privacy & Security" },
  { name: "ACA Compliance Network", note: "Best Practices" }
];

export default function MeetLeadership() {
  return (
    <section aria-labelledby="leadership" className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          id="leadership"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
        >
          Meet the Leadership
        </motion.h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Our founders and executives bring proven experience in <span className="font-semibold text-slate-900">insurance</span>,{" "}
          <span className="font-semibold text-slate-900">finance</span>, and{" "}
          <span className="font-semibold text-slate-900">technology</span>. With a compliance-first mindset and a commitment to ethics, we proudly align with respected industry associations.
        </p>

        {/* Association badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ASSOCIATIONS.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow hover:shadow-md transition"
            >
              {a.name} <span className="ml-2 text-slate-500">• {a.note}</span>
            </motion.div>
          ))}
        </div>

        {/* Team grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERS.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl border border-slate-200 transition"
            >
              {/* Headshot */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={m.headshot}
                  alt={`${m.name} headshot`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-slate-900">{m.name}</h3>
                <p className="text-sm font-medium text-indigo-600">{m.role}</p>
                <p className="mt-3 text-sm text-slate-600">{m.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Compliance callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl bg-emerald-50 p-8 border border-emerald-200 shadow-sm"
        >
          <h4 className="text-lg font-semibold text-emerald-800">Compliance & Ethical Practices</h4>
          <p className="mt-3 text-slate-800 text-sm leading-6">
            We adhere strictly to IRS and ACA regulations, maintain HIPAA safeguards, and undergo regular policy reviews. 
            Every leader signs off on a code of conduct to ensure transparency, compliance, and client trust remain at the core of our mission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
