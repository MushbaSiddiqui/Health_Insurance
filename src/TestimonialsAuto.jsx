
import React, { useState, useEffect } from "react";

/** ---------- DATA ---------- */
const TESTIMONIALS = [
  { kind: "Employer Plan", name: "N.O Daycare Owner", sub: "12 employees", rating: 5, quote: "Payroll taxes dropped and staff love $0-copay telehealth. It truly paid for itself in our second payroll.", img: "/Images/owwnerr.jpg", tone: "bg-white text-slate-900" },
  { kind: "Individuals & Families", name: "Ana P., Nursing Student", sub: "", rating: 5, quote: "Premiums are half of what I paid before, and I get cash for doctor visits. No deductible shocks.", img: "/Images/nurse.jpg", tone: "bg-gradient-to-br from-emerald-600 to-teal-700 text-white" },
  { kind: "Employer Plan", name: "S.K  Restaurant Owner", sub: "3 locations", rating: 5, quote: "Happier staff and fewer call-outs. The app made urgent care easy on weekends.", img: "/Images/ovwner1.jpg", tone: "bg-white text-slate-900" },
  { kind: "Individuals & Families", name: "Ravi & Maya", sub: "Parents of two", rating: 5, quote: "Fixed cash benefits helped us meet our major-medical deductible without touching savings.", img: "/Images/ravi.jpg", tone: "bg-gradient-to-br from-blue-700 to-indigo-800 text-white" },
  { kind: "Employer Plan", name: "G.K  Grocery Outlet", sub: "45 employees", rating: 5, quote: "Turnover dropped and recruiting improved. Zero-net cost was real for us.", img: "/Images/gk.jpg", tone: "bg-white text-slate-900" },
  { kind: "Individuals & Families", name: "Jade L.", sub: "Self-employed designer", rating: 5, quote: "Kept my doctor and used visit rollovers during a busy quarter. Claim took minutes.", img: "/Images/jade.jpg", tone: "bg-gradient-to-br from-violet-600 to-purple-700 text-white" },
  { kind: "Employer Plan", name: "M.R  Auto Shop", sub: "15 techs", rating: 4, quote: "Section 125 setup with payroll was simple. The team uses telehealth regularly.", img: "/Images/mr.jpg", tone: "bg-gradient-to-br from-cyan-600 to-blue-700 text-white" },
  { kind: "Individuals & Families", name: "Marcus T.", sub: "Rideshare", rating: 4, quote: "Cash benefits hit fast and covered prescriptions between shifts—no surprises.", img: "/Images/man.jpg", tone: "bg-white text-slate-900" },
  { kind: "Individuals & Families", name: "Elena R.", sub: "Early retiree", rating: 5, quote: "I know exactly what I'll be paid for labs and visits. Predictable and affordable.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop", tone: "bg-gradient-to-br from-orange-600 to-red-600 text-white" },
  { kind: "Individuals & Families", name: "The W. Family", sub: "with pets", rating: 5, quote: "Telehealth for the kids and even virtual vet support—one app for everything.", img: "/Images/family.jpg", tone: "bg-white text-slate-900" },
];

/** ---------- STARS ---------- */
const Stars = ({ n = 5, size = "sm" }) => {
  const sizeClasses = size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5 sm:h-4 sm:w-4";
  
  return (
    <div className="flex items-center gap-1" aria-label={`${n} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`${sizeClasses} transition-all duration-300 ${
            i < n 
              ? "text-amber-400 drop-shadow-sm" 
              : "text-gray-300/40"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 15l-5.878 3.09L5.64 11.18.764 7.41l6.09-.885L10 .5l3.146 6.025 6.09.885-4.876 3.77 1.518 6.91z" />
        </svg>
      ))}
    </div>
  );
};

/** ---------- TESTIMONIAL TILE ---------- */
function Tile({ t, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const isWhiteBackground = t.tone.includes("bg-white");
  
  return (
    <article 
      className="group mx-auto w-full max-w-[780px] transition-all duration-500 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`
        relative overflow-hidden rounded-2xl backdrop-blur-xl
        ${isWhiteBackground ? 'bg-white/95 shadow-xl border border-gray-200/50' : 'bg-white/10 border border-white/20 shadow-2xl'}
        transition-all duration-500 ease-out
        ${isHovered ? 'scale-[1.02] shadow-2xl -translate-y-1' : 'hover:scale-[1.01]'}
      `}>
        
        {/* Professional glow effect */}
        <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
          isHovered ? 'shadow-[0_0_60px_rgba(59,130,246,0.15)]' : ''
        }`} />
        
        <div className="relative flex w-full">
          {/* Left media with professional styling */}
          <div className="relative h-32 w-32 sm:h-40 sm:w-44 md:h-44 md:w-60 shrink-0 overflow-hidden rounded-l-2xl">
            <img 
              src={t.img} 
              alt="" 
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${
                isHovered ? 'scale-105' : 'scale-100'
              }`} 
            />
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`} />
          </div>

          {/* Right content with professional design */}
          <div className={`
            flex-1 p-5 sm:p-6 md:p-7 relative
            ${isWhiteBackground ? 'text-slate-900' : 'text-white'}
          `}>
            {/* Kind badge with professional styling */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className={`
                inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide
                transition-all duration-300
                ${isWhiteBackground 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200/50' 
                  : 'bg-white/15 text-white/95 border border-white/30'
                }
                ${isHovered ? 'scale-105' : ''}
              `}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  t.kind.includes('Employer') ? 'bg-blue-500' : 'bg-emerald-500'
                }`} />
                {t.kind}
              </div>
              
              {/* Professional quote icon */}
              <div className={`transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
                <svg className="h-6 w-6 sm:h-7 sm:w-7 opacity-20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 7h5v5H9v5H4v-5c0-2.2 1.8-4 4-4Zm10 0h5v5h-3v5h-5v-5c0-2.2 1.8-4 4-4Z" />
                </svg>
              </div>
            </div>

            {/* Quote with professional typography */}
            <div className="relative mb-5">
              <p className={`
                text-sm sm:text-base md:text-lg leading-relaxed font-medium
                transition-all duration-300
                ${isHovered ? 'transform translate-x-0.5' : ''}
              `}>
                "{t.quote}"
              </p>
            </div>

            {/* Author info with professional styling */}
            <div className="flex items-center justify-between gap-3">
              <div className={`transition-all duration-300 ${isHovered ? 'transform translate-x-0.5' : ''}`}>
                <div className="text-sm sm:text-base font-bold">
                  {t.name}
                </div>
                {t.sub && (
                  <div className="text-xs sm:text-sm opacity-70 font-medium mt-0.5">
                    {t.sub}
                  </div>
                )}
              </div>
              
              <div className={`transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
                <Stars n={t.rating} size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/** ---------- MAIN COMPONENT ---------- */
export default function TestimonialsShowcase({ className = "" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Professional background */}
      <div className="absolute inset-0 -z-20">
        {/* Sophisticated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-gray-900" />
        
        {/* Subtle interactive gradient */}
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 50%)`
          }}
        />
        
        {/* Professional mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:50px_50px]" />
        
        {/* Elegant bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:py-28">
        <div className="grid items-start gap-12 md:gap-16 lg:grid-cols-12">
          {/* Left section with professional design */}
          <div className="lg:col-span-5 text-white space-y-8">
            {/* Professional badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 backdrop-blur-xl border border-blue-400/20 px-5 py-2.5 text-sm font-semibold shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Customer Success Stories</span>
              </div>
            </div>

            {/* Professional title */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.9]">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Trusted by
                </span>
                <br />
                <span className="relative bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Thousands
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-lg font-light">
                See how businesses and families are saving money while getting better healthcare coverage with our innovative solutions.
              </p>
            </div>

            {/* Professional metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">98%</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Satisfaction</div>
              </div>
              <div className="text-center border-x border-slate-700/50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">50K+</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">$2.4M</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Saved</div>
              </div>
            </div>
          </div>

          {/* Right section with testimonials */}
          <div className="lg:col-span-7">
            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-3xl">
              {/* Professional animations */}
              <style>{`
                @keyframes slideUp {
                  0%   { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                .auto-scroll {
                  animation: slideUp 45s linear infinite;
                  will-change: transform;
                }
                .auto-scroll:hover {
                  animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                  .auto-scroll { animation: none !important; }
                }
              `}</style>

              <div className="auto-scroll space-y-6 sm:space-y-8">
                {loop.map((t, i) => (
                  <Tile key={i} t={t} index={i} />
                ))}
              </div>

              {/* Professional fade effects */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-slate-900 via-slate-900/50 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            </div>

            {/* Clean status indicator */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-full px-5 py-2.5 border border-slate-700/30">
                <span className="text-sm text-slate-300 font-medium">Live testimonials</span>
                <div className="w-px h-4 bg-slate-600" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-slate-400">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}