import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to MyCompany
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We are dedicated to delivering excellence in all our services. Our innovative solutions 
            help businesses thrive in the digital age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with cutting-edge solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">Delivering excellence in every project</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Results</h3>
              <p className="text-gray-600">Driving meaningful business outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;