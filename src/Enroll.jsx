import React, { useState } from 'react';

const InsuranceLandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleGetStarted = () => {
    window.open('https://direct.manhattanlife.com/#/link/6941/selfenrollmentaponte', '_blank');
  };

  return (
    <div id="enrollment" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Path to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600"> Comprehensive </span>
              Coverage
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get personalized insurance solutions in just 3 simple steps. Our streamlined enrollment process makes it easy to find the perfect coverage for you and your family.
            </p>
          </div>

          {/* Interactive Form Preview Section */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Overlay */}
              <div 
                className={`absolute inset-0 bg-black bg-opacity-40 z-20 flex items-center justify-center transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <button 
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl"
                >
                  Start Your Enrollment →
                </button>
              </div>

              {/* Form Preview Content */}
              <div className="relative z-10">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      Welcome to your 3 Step
                    </h2>
                    <h3 className="text-4xl font-bold text-yellow-300 mb-2 drop-shadow-lg">
                      Supplemental Insurance
                    </h3>
                    <h4 className="text-2xl font-semibold text-white drop-shadow-md">
                      Self Enrollment Process
                    </h4>
                    <div className="mt-4 flex justify-center">
                      <div className="bg-white bg-opacity-20 rounded-full px-6 py-2">
                        <span className="text-white font-medium">✨ Quick & Easy ✨</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Content Preview */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Statue of Liberty Icon */}
                    <div className="flex justify-center lg:justify-start">
                      <svg viewBox="0 0 200 300" className="w-40 h-60">
                        {/* Statue body */}
                        <path d="M100 280 L85 180 L85 120 L115 120 L115 180 Z" fill="#374151" />
                        
                        {/* Head */}
                        <circle cx="100" cy="100" r="15" fill="#374151" />
                        
                        {/* Crown */}
                        <path d="M85 85 L100 70 L115 85 L110 95 L90 95 Z" fill="#374151" />
                        <path d="M90 70 L95 60 M100 65 L100 55 M110 70 L105 60" stroke="#374151" strokeWidth="2" />
                        
                        {/* Torch arm */}
                        <path d="M115 120 L140 100 L145 110 L120 130" fill="#374151" />
                        
                        {/* Torch */}
                        <ellipse cx="145" cy="100" rx="8" ry="12" fill="#14b8a6" />
                        <path d="M140 88 Q145 85 150 88 Q148 92 145 95 Q142 92 140 88" fill="#14b8a6" />
                        
                        {/* Tablet arm */}
                        <path d="M85 120 L60 140 L65 150 L90 130" fill="#374151" />
                        
                        {/* Tablet */}
                        <rect x="55" y="135" width="15" height="20" fill="#374151" />
                        
                        {/* Base */}
                        <ellipse cx="100" cy="285" rx="25" ry="5" fill="#374151" />
                      </svg>
                    </div>

                    {/* Steps */}
                    <div className="space-y-6">
                      <div className="flex items-center group">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                          1
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Start Your Quote</h3>
                          <p className="text-gray-600">Enter your zip code to get started</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center group">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                          2
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Pick Your Product</h3>
                          <p className="text-gray-600">Choose the perfect coverage option</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center group">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                          3
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Begin Your Enrollment</h3>
                          <p className="text-gray-600">Complete your application</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sample Form Fields Preview */}
                  <div className="mt-12 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 text-center border-b-2 border-gray-200 pb-2">
                      Sample Enrollment Form
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* DOB Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="MM-DD-YYYY"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
                            disabled
                          />
                          <button className="px-3 py-2 bg-gray-600 text-white rounded-r-lg">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Gender Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <div className="flex gap-3">
                          <button className="px-4 py-2 bg-gray-600 text-white rounded">Male</button>
                          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Female</button>
                        </div>
                      </div>
                    </div>

                    {/* Zip Code Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                      <input
                        type="text"
                        placeholder="Please enter 5 digit zip"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
                        disabled
                      />
                    </div>

                    {/* Dependents Section Preview */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Dependents</label>
                      <div className="grid grid-cols-12 gap-4 mb-2 text-xs font-medium text-gray-600">
                        <div className="col-span-4">First Name</div>
                        <div className="col-span-3">Dependent Type</div>
                        <div className="col-span-4">Birth Date</div>
                        <div className="col-span-1"></div>
                      </div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4">
                          <input
                            type="text"
                            placeholder="FirstName"
                            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50"
                            disabled
                          />
                        </div>
                        <div className="col-span-3">
                          <select className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50" disabled>
                            <option>--Select--</option>
                          </select>
                        </div>
                        <div className="col-span-4">
                          <input
                            type="text"
                            placeholder="MM-DD-YYYY"
                            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50"
                            disabled
                          />
                        </div>
                        <div className="col-span-1">
                          <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded text-sm">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Text */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                Hover over the form above and click "Start Your Enrollment" to begin your application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Enrollment Process?</h2>
            <p className="text-lg text-gray-600">Experience the easiest way to get comprehensive insurance coverage</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Complete your enrollment in just minutes with our streamlined process</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Your personal information is protected with bank-level security</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h0m0 0h0m0 0h0m0 0v0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it with our dedicated support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg mr-3"></div>
              <h3 className="text-2xl font-bold">InsuranceEdge</h3>
            </div>
            <p className="text-gray-400">Your trusted partner for comprehensive insurance solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsuranceLandingPage;