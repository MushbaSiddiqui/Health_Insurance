import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', to: '/about' },
      { name: 'Leadership', to: '/about' },
    ],
    solutions: [
      { name: 'Employer Plans', to: '/Employer-Plan' },
      { name: 'Individual Plans', to: '/individual-family-plan' },
    ],
    resources: [
      { name: 'Resource Center', to: '/resources' },
      { name: 'Blog & Insights', to: '/blog' },
    ],
    support: [
      { name: 'Customer Service', to: '/contact' },
      { name: 'Claims Support', to: '/compliance' },
    ],
  };

  const socialLinks = [
    /*{
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/corebridge',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },*/
  
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/16seEx3KoK/',
      icon: (
        vg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/financialshieldpro?igsh=MTN4ZGcydjR3cTUxMQ==',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];
<s
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Company Info & Logo */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold">InspirZhealth</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Better health coverage, built around people. We're making healthcare simple, affordable, and accessible for employers and families nationwide.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {Object.entries(footerLinks).map(([section, links]) => (
                <div key={section}>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.to}
                          className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-slate-400">
              © {currentYear} Inspirez Health Solutions. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                Privacy Policy
              </span>
              <span>•</span>
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                Terms of Service
              </span>
              <span>•</span>
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                Legal Disclosures
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
