import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-white text-xl font-bold"
        >
          MyCompany
        </Link>
        <div className="space-x-6">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
