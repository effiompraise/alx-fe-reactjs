import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#1F2937', padding: '1rem' }}>
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}
        className="container mx-auto"
      >
        <Link 
          to="/" 
          style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}
        >
          MyCompany
        </Link>
        <div className="space-x-6">
          <Link 
            to="/" 
            style={{ color: '#D1D5DB' }}
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{ color: '#D1D5DB' }}
            className="hover:text-white transition-colors"
          >
            About
          </Link>
          <Link 
            to="/services" 
            style={{ color: '#D1D5DB' }}
            className="hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            style={{ color: '#D1D5DB' }}
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
