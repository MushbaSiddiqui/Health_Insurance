// src/CustomerService.jsx
import React, { useState } from "react";
import { getApiUrl, API_CONFIG } from "./config";

export default function CustomerService({
  privacyUrl = "/privacy-policy",
  termsUrl = "/pricavy-policy",
  hipaaUrl = "/Compliance",
  nondiscriminationUrl = "/Compliance",
  hours = [
    { day: "Mon–Fri", time: "9:00 AM – 6:00 PM (ET)" },
    { day: "Sat", time: "10:00 AM – 2:00 PM (ET)" },
    { day: "Sun", time: "Closed" },
  ],
}) {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "general",
    subject: "",
    message: "",
    consent: false
  });
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.consent) newErrors.consent = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };



  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    
    // Validate form
    if (!validateForm()) {
      setStatus({
        type: "error",
        msg: "Please fill in all required fields correctly."
      });
      return;
    }

    setLoading(true);

    try {
      // Submit data directly to Google Apps Script using form-encoded data
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('name', formData.name);
      formDataEncoded.append('email', formData.email);
      formDataEncoded.append('phone', formData.phone || 'Not provided');
      formDataEncoded.append('category', formData.category);
      formDataEncoded.append('subject', formData.subject);
      formDataEncoded.append('message', formData.message);
      formDataEncoded.append('consent', formData.consent ? 'Yes' : 'No');

      const response = await fetch('https://script.google.com/macros/s/AKfycbzL3csMLe_bbENlhwaOJ9csqYqNBFDKTUSVeMoIg7bFbS6a06YkWu1MhmEURk3fnpb2/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataEncoded.toString()
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.text();
      console.log('Submission result:', result);
      
      // Show success message
      setLoading(false);
      setStatus({
        type: "success",
        msg: "Thanks! Your message has been received and saved. Our support team will reply within 1 business day.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "general",
        subject: "",
        message: "",
        consent: false
      });
      setErrors({});
      
    } catch (error) {
      console.error('Submission error:', error);
      setLoading(false);
      setStatus({
        type: "error",
        msg: "Sorry, there was an error submitting your form. Please try again or contact us directly.",
      });
    }
  }

  return (
    <section id="customer-service" className="relative py-20">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Customer Service
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Need help with your plan, claims, or enrollment? Send us a message and we’ll get back to you.
          </p>

        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Left: Hours & Policies */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Hours of Operation</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between">
                    <span className="font-medium">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 h-px w-full bg-slate-100" />

              <h4 className="mt-6 text-base font-semibold text-slate-900">Policies & Notices</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="text-indigo-700 hover:underline" href={privacyUrl}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-indigo-700 hover:underline" href={termsUrl}>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a className="text-indigo-700 hover:underline" href={hipaaUrl}>
                    HIPAA Notice of Privacy Practices
                  </a>
                </li>
                <li>
                  <a className="text-indigo-700 hover:underline" href={nondiscriminationUrl}>
                    Non-Discrimination Notice
                  </a>
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900">
                Please don’t include sensitive Protected Health Information (PHI) in this form. If needed,
                we’ll provide a secure channel.
              </div>
            </div>
          </aside>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              noValidate
            >
              <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-slate-800">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-indigo-500'
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-slate-800">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-indigo-500'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-800">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
                    placeholder="+1 (555) 555-1234"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="category" className="text-sm font-medium text-slate-800">
                    Topic
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="general">General Question</option>
                    <option value="plan">Plan & Benefits</option>
                    <option value="claims">Claims</option>
                    <option value="billing">Billing</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-800">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-indigo-500'
                    }`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-800">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-indigo-500'
                    }`}
                    placeholder="Describe the issue or question…"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="inline-flex items-start gap-2 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className={`mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 ${
                        errors.consent ? 'ring-2 ring-red-500' : ''
                      }`}
                    />
                    <span>
                      I agree to the{" "}
                      <a className="text-indigo-700 underline" href={termsUrl}>
                        Terms of Use
                      </a>{" "}
                      and have read the{" "}
                      <a className="text-indigo-700 underline" href={privacyUrl}>
                        Privacy Policy
                      </a>
                      . *
                    </span>
                  </label>
                  {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                </div>
              </fieldset>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  Typical response time: within 1 business day.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>

              {/* Status message (ARIA live region) */}
              <div
                aria-live="polite"
                className={`mt-4 text-sm ${
                  status.type === "success"
                    ? "text-emerald-700"
                    : status.type === "error"
                    ? "text-rose-700"
                    : "text-slate-600"
                }`}
              >
                {status.msg}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
