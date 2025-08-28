// src/Navigation.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Logo = () => (
  <div className="flex items-center gap-3">
    <img 
      src="/Images/logo1.png" 
      alt="Inspirzhealth Logo" 
      className="w-48 h-48 sm:w-32 sm:h-32 object-contain"
    />
    
  </div>
);

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Employer Plan", to: "/employer-plan" },
  { name: "Individual & Family Plan", to: "/individual-family-plan" },
  { name: "Resources & Insights", to: "/resources" },
  { name: "Contact", to: "/contact" },
  { name: "Compliance & Legal Notice", to: "/compliance" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-slate-200`}>
        <nav className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                [
                  "block px-3 py-2 rounded-md text-base font-medium transition",
                  isActive
                    ? "text-indigo-700 bg-indigo-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                ].join(" ")
              }
              end={link.to === "/"}
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
