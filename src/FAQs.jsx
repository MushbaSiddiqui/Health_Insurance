// src/EmployersFAQ.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/** ---------- Data (exact wording) ---------- */
const FAQ_ITEMS = [
  {
    id: "is-this-legal",
    q: "Is this legal?",
    a:
      "Yes. We use Section 125 salary reduction to fund qualified benefits; we do not reimburse wages or pay wellness incentives, which the IRS disallows.",
  },
  {
    id: "replace-health-insurance",
    q: "Does this replace my health insurance?",
    a: "No. It enhances your current plan and provides additional services.",
  },
  {
    id: "no-group-plan",
    q: "What if I don’t offer a group plan?",
    a:
      "You can still provide virtual health benefits as a standalone program, but the savings may vary.",
  },
  {
    id: "how-quickly-savings",
    q: "How quickly do I see savings?",
    a:
      "Typically by the second payroll cycle, once pre-tax deductions begin.",
  },
  {
    id: "wellness-activities-required",
    q: "Are employees required to complete wellness activities?",
    a:
      "Our plan only requires enrollment; there are no tasks or cash reimbursements that could trigger taxable income.",
  },
];

/** ---------- Tiny inline icons (no external libs) ---------- */
const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
    aria-hidden="true"
  >
    <path
      d="M5.5 7.5l4.5 4 4.5-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Shield = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2c-2.8 1.6-5.7 2.4-8.6 2.4-.4 0-.6.3-.6.6V9c0 6.2 4.3 12 9.2 13.4C17 21 21.2 15.2 21.2 9V5c0-.3-.2-.6-.6-.6C17.7 4.4 14.8 3.6 12 2z" />
  </svg>
);
const LinkIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M3.9 12a4.1 4.1 0 014.1-4.1h3v2h-3a2.1 2.1 0 000 4.2h3v2h-3A4.1 4.1 0 013.9 12zm12-4.1h-3v2h3a2.1 2.1 0 010 4.2h-3v2h3a4.1 4.1 0 000-8.2z" />
    <path d="M9 11h6v2H9z" />
  </svg>
);

/** ---------- Motion presets ---------- */
const panelVariants = (reduced) => ({
  initial: { height: 0, opacity: reduced ? 1 : 0 },
  animate: { height: "auto", opacity: 1, transition: { duration: reduced ? 0 : 0.25, ease: "easeOut" } },
  exit: { height: 0, opacity: reduced ? 1 : 0, transition: { duration: reduced ? 0 : 0.2, ease: "easeIn" } },
});

/** ---------- Utilities ---------- */
const copyAnchor = async (id) => {
  try {
    const url = new URL(window.location.href);
    url.hash = id;
    await navigator.clipboard.writeText(url.toString());
    return true;
  } catch {
    return false;
  }
};

/** ---------- Component ---------- */
export default function EmployersFAQ() {
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(() => new Set());
  const [query, setQuery] = useState("");
  const buttonsRef = useRef({}); // for keyboard nav

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      (it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
    );
  }, [query]);

  const isOpen = (id) => open.has(id);
  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const openAll = () => setOpen(new Set(filtered.map((i) => i.id)));
  const closeAll = () => setOpen(new Set());

  // Deep-link support via #hash
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!id) return;
    if (FAQ_ITEMS.some((i) => i.id === id)) {
      setOpen((prev) => new Set(prev).add(id));
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Keyboard arrow navigation among question buttons
  const handleKeyNav = (e, idx) => {
    if (!["ArrowDown", "ArrowUp"].includes(e.key)) return;
    e.preventDefault();
    const items = filtered.map((i) => i.id);
    const nextIdx =
      e.key === "ArrowDown"
        ? Math.min(idx + 1, items.length - 1)
        : Math.max(idx - 1, 0);
    const nextBtn = buttonsRef.current[items[nextIdx]];
    nextBtn?.focus();
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-50">
      {/* decorative glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.sky.200),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.emerald.200),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <header className="mb-8 text-center md:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            FAQs for Employers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-700">
            Clear answers to the most common questions about our Section 125–based program.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-emerald-500 to-sky-600" />
        </header>

        {/* Controls */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs…"
              className="w-full rounded-xl border border-slate-300 bg-white/90 p-3 pr-10 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Search FAQs"
            />
            <svg
              viewBox="0 0 24 24"
              className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            >
              <path
                d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 10-.7.7l.3.3v.8l4.5 4.5 1.5-1.5-4.5-4.5zM10.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="flex gap-2">
            <button
              onClick={openAll}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Open all
            </button>
            <button
              onClick={closeAll}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* FAQ list */}
        <ul className="space-y-4">
          {filtered.map((item, idx) => {
            const openState = isOpen(item.id);
            return (
              <li key={item.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <h3 id={`${item.id}-heading`}>
                  <button
                    ref={(el) => (buttonsRef.current[item.id] = el)}
                    id={item.id}
                    className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl"
                    aria-expanded={openState}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => toggle(item.id)}
                    onKeyDown={(e) => handleKeyNav(e, idx)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sky-600 to-emerald-600 text-white shadow-sm">
                        <Shield className="h-5 w-5" />
                      </span>
                      <span className="text-base font-semibold text-slate-900">
                        {item.q}
                      </span>
                    </span>

                    <span className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyAnchor(item.id);
                        }}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        aria-label="Copy link to this question"
                        title="Copy link"
                      >
                        <LinkIcon className="h-4 w-4" />
                      </button>
                      <Chevron open={openState} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {openState && (
                    <motion.div
                      id={`${item.id}-panel`}
                      role="region"
                      aria-labelledby={`${item.id}-heading`}
                      className="overflow-hidden px-5"
                      variants={panelVariants(prefersReducedMotion)}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="pb-5 pt-1 text-[15px] leading-relaxed text-slate-700">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Information above is provided for general educational purposes and reflects the exact FAQs supplied.
        </p>
      </div>
    </section>
  );
}
