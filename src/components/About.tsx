import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Metrics Grid */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-blue-900 w-64 h-64 md:w-80 md:h-80 rounded-full absolute -z-10 -left-5 -top-5 opacity-10"></div>
              <div className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-4xl font-bold text-blue-900">10+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-4xl font-bold text-blue-900">50+</h3>
                    <p className="text-gray-600">Projects Delivered</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-4xl font-bold text-blue-900">10+</h3>
                    <p className="text-gray-600">Team Members</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-4xl font-bold text-blue-900">99.9%</h3>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-900">EnnBi Softwares</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 mb-6"></div>

            {/* Ticker */}
            <div className="overflow-hidden whitespace-nowrap relative mb-8">
              <div className="inline-block animate-marquee">
                <span className="mx-8 text-blue-900 font-semibold text-lg">10+ Years Experience</span>
                <span className="mx-8 text-blue-900 font-semibold text-lg">50+ Projects Delivered</span>
                <span className="mx-8 text-blue-900 font-semibold text-lg">10+ Team Members</span>
                <span className="mx-8 text-blue-900 font-semibold text-lg">99.9% Client Satisfaction</span>
              </div>
              <div className="inline-block animate-marquee" aria-hidden="true">
                <span className="mx-8 text-blue-900 font-semibold text-lg">10+ Years Experience</span>
                <span className="mx-8 text-blue-900 font-semibold text-lg">50+ Projects Delivered</span>
                <span className="mx-8 text-blue-900 font-semibold text-lg">10+ Team Members</span>
                <span className="mx-8 text-blue-900 font-semibold text-lg">99.9% Client Satisfaction</span>
              </div>
            </div>

            {/* Paragraphs */}
            <p className="text-gray-700 mb-6">
              Founded in 2022, EnnBi Softwares has grown from a small team of passionate developers into a full-service software development company trusted by businesses worldwide.
            </p>
            <p className="text-gray-700 mb-6">
              Our team combines technical excellence with industry expertise to deliver innovative software solutions that solve complex business challenges. We're committed to quality, transparency, and creating lasting partnerships with our clients.
            </p>
            <p className="text-gray-700 mb-6">
              From startups to enterprise organizations, we work with businesses of all sizes across industries including healthcare, finance, retail, and education.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                'Agile Development',
                '24/7 Support',
                'Experienced Team',
                'Custom Solutions',
              ].map((item, index) => (
                <div className="flex items-center" key={index}>
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
