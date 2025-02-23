import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation and technology adoption"
    },
    {
      title: "Market Analysis",
      description: "In-depth market research and competitive analysis for informed decision making"
    },
    {
      title: "Product Development",
      description: "End-to-end product development services from ideation to launch"
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;