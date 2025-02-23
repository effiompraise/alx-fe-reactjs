import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-6">
              Since 1990, MyCompany has been at the forefront of innovation, providing 
              top-notch services to businesses worldwide. We specialize in technology, 
              marketing, and consultancy services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative solutions that drive growth 
                  and success in an ever-evolving digital landscape.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Excellence in delivery</li>
                  <li>Customer-first approach</li>
                  <li>Continuous innovation</li>
                  <li>Ethical practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;