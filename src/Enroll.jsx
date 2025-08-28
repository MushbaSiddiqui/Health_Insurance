import React, { useState } from 'react';

const InsuranceLandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleGetStarted = () => {
    window.open('https://direct.manhattanlife.com/#/link/6941/selfenrollmentaponte', '_blank');
  };

  return (
    <div id="enrollment" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Path to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700"> Comprehensive </span>
              Coverage
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get personalized insurance solutions in just 3 simple steps. Our streamlined enrollment process makes it easy to find the perfect coverage for you and your family.
            </p>
          </div>

          {/* Interactive Form Preview Section */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-102 cursor-pointer border border-gray-200"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Overlay */}
              <div 
                className={`absolute inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <button 
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-teal-600 to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  Start Your Enrollment →
                </button>
              </div>

              {/* Form Preview Content */}
              <div className="relative z-10">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-teal-600 to-blue-700 p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-1">
                      3-Step Supplemental Insurance
                    </h2>
                    <h3 className="text-lg font-medium text-teal-100">
                      Self Enrollment Process
                    </h3>
                  </div>
                </div>

                {/* Form Content Preview */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
                    {/* Simplified Icon */}
                    <div className="flex justify-center md:justify-start">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                          1
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-800">Enter Zip Code</h3>
                          <p className="text-xs text-gray-600">Get your personalized quote</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                          2
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-800">Choose Coverage</h3>
                          <p className="text-xs text-gray-600">Select your insurance plan</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                          3
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-800">Complete Enrollment</h3>
                          <p className="text-xs text-gray-600">Finalize your application</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sample Form Fields Preview */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
                      Sample Enrollment Form
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* DOB Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input
                          type="text"
                          placeholder="MM/DD/YYYY"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 bg-gray-50 text-sm"
                          disabled
                        />
                      </div>

                      {/* Gender Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm" disabled>
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>

                    {/* Zip Code Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                      <input
                        type="text"
                        placeholder="Enter your 5-digit zip code"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 bg-gray-50 text-sm"
                        disabled
                      />
                    </div>

                    {/* Dependents Section Preview */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Add Dependents (Optional)</label>
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                        <div className="grid grid-cols-3 gap-2 mb-2">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="px-2 py-1 border border-gray-300 rounded text-xs bg-white"
                            disabled
                          />
                          <select className="px-2 py-1 border border-gray-300 rounded text-xs bg-white" disabled>
                            <option>Relationship</option>
                            <option>Spouse</option>
                            <option>Child</option>
                          </select>
                          <input
                            type="text"
                            placeholder="Birth Date"
                            className="px-2 py-1 border border-gray-300 rounded text-xs bg-white"
                            disabled
                          />
                        </div>
                        <button className="text-xs text-teal-600 font-medium hover:text-teal-700">
                          + Add Another Dependent
                        </button>
                      </div>
                    </div>

                    {/* Preview CTA */}
                    <div className="pt-2">
                      <div className="w-full bg-gradient-to-r from-teal-600 to-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium text-center opacity-60">
                        Continue to Coverage Options
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Text */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Hover over the form above to begin your enrollment process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Our Enrollment Process?</h2>
            <p className="text-lg text-gray-600">Experience the easiest way to get comprehensive insurance coverage</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Process</h3>
              <p className="text-gray-600 text-sm">Complete your enrollment in just minutes with our streamlined process</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Platform</h3>
              <p className="text-gray-600 text-sm">Your personal information is protected with bank-level security</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h0" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Get help whenever you need it with our dedicated support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-teal-600 to-blue-700 rounded mr-2"></div>
              <h3 className="text-xl font-bold">InsuranceEdge</h3>
            </div>
            <p className="text-gray-400 text-sm">Your trusted partner for comprehensive insurance solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsuranceLandingPage;