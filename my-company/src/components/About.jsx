import React from 'react';

const About = () => {
  const featureStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    padding: '1.5rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.75rem'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '6rem 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            About Our Company
          </h1>
          <div style={{
            height: '4px',
            width: '100px',
            backgroundColor: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1.5rem',
          padding: '3rem',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: '#4b5563',
            marginBottom: '2rem',
            lineHeight: 1.7
          }}>
            Since 1990, we've pioneered digital transformation for global enterprises, 
            combining technical excellence with strategic vision to deliver 
            measurable business impact.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={featureStyle}>
              <div style={{
                backgroundColor: '#dbeafe',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              }}>
                <svg style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Our Mission
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                  Empower organizations through innovative digital solutions 
                  that create lasting competitive advantage.
                </p>
              </div>
            </div>
            
            <div style={featureStyle}>
              <div style={{
                backgroundColor: '#dcfce7',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              }}>
                <svg style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Our Values
                </h3>
                <ul style={{ color: '#6b7280', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                  <li>Client-centric innovation</li>
                  <li>Data-driven decision making</li>
                  <li>Ethical business practices</li>
                  <li>Sustainable growth focus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;