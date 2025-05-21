import React from 'react';
import { services } from '../data';
import { Code, Smartphone, Cloud, Brain } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={40} className="text-blue-900" />;
      case 'Smartphone':
        return <Smartphone size={40} className="text-blue-900" />;
      case 'Cloud':
        return <Cloud size={40} className="text-blue-900" />;
      case 'Brain':
        return <Brain size={40} className="text-blue-900" />;
      default:
        return <Code size={40} className="text-blue-900" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            We offer a comprehensive range of software development services tailored to meet your business objectives and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Looking for a custom solution?</h3>
          <a 
            href="#contact" 
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-300"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;