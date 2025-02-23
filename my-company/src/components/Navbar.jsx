import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav style={{
      backgroundColor: '#111827',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto'
      }}>
        <Link 
          to="/" 
          style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 700,
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }}
        >
          MyCompany
        </Link>
        <div style={{ 
          display: 'flex', 
          gap: '2rem',
          marginLeft: 'auto'
        }}>
          {['/', '/about', '/services', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              style={{
                color: hoveredLink === path ? '#60a5fa' : '#e5e7eb',
                fontSize: '0.875rem',
                fontWeight: 500,
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                transition: 'all 0.3s ease',
                transform: hoveredLink === path ? 'scale(1.05)' : 'scale(1)',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={() => setHoveredLink(path)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;