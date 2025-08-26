import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-700">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        Privacy Policy & HIPAA Compliance
      </h1>
      <p className="mb-4">
        We value your privacy and are committed to protecting your personal
        health information (PHI). This Privacy Policy explains how we collect,
        use, and safeguard your data in compliance with HIPAA and federal
        privacy laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, contact
        details, medical history, insurance information, and other relevant
        data necessary for processing claims and providing services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To process claims and provide insurance benefits.</li>
        <li>To communicate important updates and services.</li>
        <li>To comply with legal and regulatory obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. HIPAA Compliance</h2>
      <p className="mb-4">
        All PHI is stored securely and encrypted both in transit and at rest.
        Access is restricted to authorized personnel only. Our policies and
        systems are regularly reviewed to ensure ongoing HIPAA compliance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Sharing</h2>
      <p className="mb-4">
        We do not sell your personal information. Data is shared only with
        trusted partners, healthcare providers, and as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Request access to your personal health information.</li>
        <li>Request corrections to inaccurate or incomplete data.</li>
        <li>Request restrictions on how your PHI is used.</li>
        <li>File a complaint if you believe your privacy rights have been violated.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our HIPAA
        compliance, please contact us at:
      </p>
      <p className="mt-2 font-medium">
        Email: Support@inspirzhealth.com <br />
        Phone: (123) 456-7890 <br />
      </p>
    </div>
  );
}
