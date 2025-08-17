// src/Navigation.jsx
import { NavLink } from "react-router-dom";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
    <span className="text-xl font-bold text-slate-900">corebridge</span>
  </div>
);

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Employer Plan", to: "/employer-plan" },
  { name: "Individual & Family Plan", to: "/individual-family-plan" },
  { name: "Resources & Insights", to: "/resources" },
  { name: "Contact", to: "/contact" },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Links */}
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                [
                  "px-3 py-2 rounded-md text-sm font-medium transition",
                  isActive
                    ? "text-indigo-700 bg-indigo-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                ].join(" ")
              }
              end={link.to === "/"}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
