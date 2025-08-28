import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Hero from "./Hero";                 // your home hero
import EmployerPlan from "./EmployerPlan"; // export default of the Employer hero you pasted
import IndividualPlan from "./IndividualsPlan";
import AboutHero from "./AboutHero";
import ContactUs from "./ContactPage";
import CompliancePage from "./Compliance";
import ResourcesInsightsPage from './ResourcesInsightsPage';
import Section125Guide from "./Section125Guide";
import FixedIndemnityGuide from "./FixedIndemnityGuide";
import FIAGuide from "./FIAGuide";
import BlogIndex from "./BlogIndex";
import PostFutureVirtualCare from "./pages/blog/PostFutureVirtualCare";
import PostTelehealth39 from "./pages/blog/PostTelehealth39";
import PostWellnessDoubleDip from "./pages/blog/PostWellnessDoubleDip";
import PostSection125CaseStudies from "./pages/blog/PostSection125CaseStudies";
import PrivacyHIPAA from "./privacy-policy1";
import PrivacyPolicy from "./PrivacyPolicy";
import TestForm from "./TestForm";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Employer-Plan" element={<EmployerPlan />} />
        <Route path="/individual-family-plan" element={<IndividualPlan />} />
        <Route path="/about" element={<AboutHero />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/resources" element={<ResourcesInsightsPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/guides/section-125-fica" element={<Section125Guide />} />
        <Route path="/guides/fixed-indemnity" element={<FixedIndemnityGuide />} />
        <Route path="/guides/fia-safe-growth" element={<FIAGuide />} />
        {/* Blog */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/future-of-virtual-care" element={<PostFutureVirtualCare />} />
        <Route path="/blog/telehealth-39-dollar-plans" element={<PostTelehealth39 />} />
        <Route path="/blog/wellness-program-double-dip" element={<PostWellnessDoubleDip />} />
        <Route path="/blog/section-125-case-studies" element={<PostSection125CaseStudies />} />
        {/* Test Form for Debugging */}
        <Route path="/test-form" element={<TestForm />} />
        {/* Add others as you build them */}
        {/* <Route path="/individual-family-plan" element={<Individuals />} /> */}
        <Route path="/" element={<PrivacyHIPAA />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
