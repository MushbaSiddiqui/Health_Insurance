// src/SavingsCalculator.jsx
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------- helpers ---------- */
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

/* Example presets from your brief */
const EXAMPLES = [
  { label: "Daycare Owner", employees: 12, annual: 11568, peMonthly: 11568 / (12 * 12) }, // ≈ 80.33
  { label: "Auto Repair Shop", employees: 15, annual: 15570, peMonthly: 15570 / (15 * 12) }, // ≈ 86.50
  { label: "Trucking Company", employees: 45, annual: 46710, peMonthly: 46710 / (45 * 12) }, // ≈ 86.50
];

const container = (r) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: r ? 0 : 0.12 } },
});
const item = (r) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: r ? 0 : 0.45, ease: "easeOut" } },
});

export default function SavingsCalculator() {
  const reduced = useReducedMotion();

  // Core inputs
  const [employees, setEmployees] = useState(20);
  const [avgSalary, setAvgSalary] = useState(52000);
  const [perEmpMonthly, setPerEmpMonthly] = useState(62.5); // typical mid-point

  const totals = useMemo(() => {
    const e = clamp(Number(employees) || 0, 0, 10000);
    const m = clamp(Number(perEmpMonthly) || 0, 0, 500);
    const monthly = e * m;
    const annual = monthly * 12;
    return { e, monthly, annual };
  }, [employees, perEmpMonthly]);

  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-50">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.sky.200/50),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.emerald.200/50),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Savings Calculator &amp; Examples
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-700">
            Enter your W-2 headcount and average salary, then adjust the savings assumption to estimate FICA savings.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-emerald-500 to-sky-600" />
        </div>

        {/* Layout */}
        <motion.div
          variants={container(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-6 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]"
        >
          {/* LEFT: Inputs */}
          <motion.div
            variants={item(reduced)}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="bg-gradient-to-r from-sky-600 to-emerald-600 px-6 py-4 text-white">
              <div className="text-sm font-semibold tracking-wide">Your Inputs</div>
            </div>

            <div className="px-6 py-6 space-y-6">
              {/* employees */}
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-slate-900">
                  Number of W-2 employees
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    id="employees"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    step={1}
                    value={employees}
                    onChange={(e) => setEmployees(e.target.value)}
                    className="w-44 rounded-lg border-slate-300 text-slate-900 focus:border-sky-500 focus:ring-sky-500"
                  />
                  <div className="text-xs text-slate-500">people</div>
                </div>
              </div>

              {/* avg salary */}
              <div>
                <label htmlFor="avgSalary" className="block text-sm font-medium text-slate-900">
                  Average salary (annual)
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    id="avgSalary"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={1000}
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(e.target.value)}
                    className="w-44 rounded-lg border-slate-300 text-slate-900 focus:border-sky-500 focus:ring-sky-500"
                  />
                  <div className="text-xs text-slate-500">
                    contextual; estimate uses assumption below
                  </div>
                </div>
              </div>

              {/* assumption slider */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="assump" className="block text-sm font-medium text-slate-900">
                    Savings per employee / month (assumption)
                  </label>
                  <span className="text-sm font-semibold text-slate-900">
                    {fmt(perEmpMonthly)}
                  </span>
                </div>
                <input
                  id="assump"
                  type="range"
                  min={50}
                  max={90}
                  step={0.5}
                  value={perEmpMonthly}
                  onChange={(e) => setPerEmpMonthly(Number(e.target.value))}
                  className="mt-3 w-full accent-emerald-600"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>$50</span>
                  <span>typical $62.5</span>
                  <span>$75</span>
                  <span>$86.5</span>
                </div>
              </div>

              {/* example chips */}
              <div>
                <div className="text-sm font-medium text-slate-900">Examples</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {EXAMPLES.map((ex) => (
                    <button
                      key={ex.label}
                      onClick={() => {
                        setEmployees(ex.employees);
                        setPerEmpMonthly(Number(ex.peMonthly.toFixed(2)));
                      }}
                      className="rounded-full border border-sky-300 bg-white px-3 py-1.5 text-sm font-medium text-sky-800 hover:bg-sky-50"
                      title={`${ex.label}: ${fmt(ex.annual)}/yr`}
                    >
                      {ex.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Results */}
          <motion.div variants={item(reduced)} className="grid gap-6">
            {/* totals card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 to-sky-50" />
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  Estimated Savings
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="text-xs text-slate-500">Employees</div>
                    <div className="mt-1 text-2xl font-extrabold text-slate-900">
                      {totals.e.toLocaleString()}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="text-xs text-slate-500">Monthly Savings (total)</div>
                    <div className="mt-1 text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-sky-700 bg-clip-text text-transparent">
                      {fmt(totals.monthly)}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {fmt(perEmpMonthly)} / employee / month
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="text-xs text-slate-500">Annual Savings (est.)</div>
                    <div className="mt-1 text-2xl font-extrabold text-slate-900">
                      {fmt(totals.annual)}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-slate-700">
                  Actual savings depend on payroll size and the pre-tax contribution amount, but employers typically save{" "}
                  <strong>$50–$75 per employee per month</strong>.
                </p>
              </div>
            </div>

            {/* explainer ribbon — fresh palette (emerald → sky) */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-600 px-6 py-4 text-center text-[14.5px] font-semibold text-white shadow-sm">
              Use the example buttons to see real-world outcomes. Tune the assumption slider to match your plan design.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
