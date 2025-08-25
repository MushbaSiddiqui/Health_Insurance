// src/components/NonDiscriminationNotice.jsx
import React from "react";

export default function NonDiscriminationNotice({
  contactPhone = "(555) 123-4567",
}) {
  return (
    <section
      id="non-discrimination"
      className="relative overflow-hidden"
      aria-labelledby="non-discrimination-title"
    >
      {/* Colorful gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-100 via-sky-100 to-emerald-100"
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="non-discrimination-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Non-Discrimination &amp; Accessibility Notice
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
            We comply with federal civil rights laws (Title VI, Section 1557) and do not
            discriminate on the basis of <span className="font-semibold text-rose-600">race</span>,{" "}
            <span className="font-semibold text-amber-600">color</span>,{" "}
            <span className="font-semibold text-sky-600">national origin</span>,{" "}
            <span className="font-semibold text-emerald-600">age</span>,{" "}
            <span className="font-semibold text-indigo-600">disability</span>, or{" "}
            <span className="font-semibold text-purple-600">sex</span>.
          </p>
        </div>

        {/* Assistance services */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-900">
            Free Language Assistance &amp; Accessibility Support
          </h3>
          <p className="mt-3 text-sm text-slate-700">
            Language assistance services are available in multiple languages, and accessibility
            accommodations can be requested at:
          </p>
          <p className="mt-4 text-lg font-bold text-sky-700">
            📞 Call: <a href={`tel:${contactPhone.replace(/[^\d+]/g, "")}`}>{contactPhone}</a>
          </p>
        </div>

        {/* Multi-language samples */}
        <div className="mt-10 grid grid-cols-1 gap-3 text-sm text-slate-800 sm:grid-cols-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">
            Español: Si necesita ayuda con el idioma, llame al {contactPhone}.
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-3">
            中文: 如果您需要语言帮助, 请致电 {contactPhone}。
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
            العربية: إذا كنت بحاجة إلى مساعدة لغوية، يرجى الاتصال {contactPhone}.
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
            Tiếng Việt: Nếu bạn cần trợ giúp ngôn ngữ, vui lòng gọi {contactPhone}.
          </div>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
            Русский: Если вам нужна языковая помощь, позвоните {contactPhone}.
          </div>
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">
            Français : Si vous avez besoin d’aide linguistique, appelez le {contactPhone}.
          </div>
        </div>
      </div>
    </section>
  );
}
