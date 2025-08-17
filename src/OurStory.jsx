export default function OurStoryMission() {
    return (
      <section aria-labelledby="our-story" className="relative py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <h2 id="our-story" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Story &amp; Mission
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-700">
              Founded by healthcare and benefits veterans, we saw too many small businesses struggle to
              offer meaningful health benefits without crushing costs. We also saw individuals forced to
              choose between paying rent and paying insurance premiums. Our mission is to remove
              financial barriers to healthcare by pairing legitimate tax-advantaged programs with
              lower-cost insurance options. We adhere strictly to IRS and ACA regulations and value
              transparency, compliance and customer trust.
            </p>
          </header>
  
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
            {["Transparency", "Compliance", "Customer Trust", "IRS-Aligned", "ACA-Aligned"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
  
          <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Who We Serve
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-emerald-300 bg-emerald-50 text-xs text-emerald-700">✓</span>
                  Small businesses seeking meaningful benefits without prohibitive costs.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-emerald-300 bg-emerald-50 text-xs text-emerald-700">✓</span>
                  Individuals balancing essential coverage with everyday expenses.
                </li>
              </ul>
            </div>
  
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                How We Deliver
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-indigo-300 bg-indigo-50 text-xs text-indigo-700">✓</span>
                  Pair tax-advantaged programs with lower-cost insurance options.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-indigo-300 bg-indigo-50 text-xs text-indigo-700">✓</span>
                  Strict alignment with IRS and ACA regulations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  