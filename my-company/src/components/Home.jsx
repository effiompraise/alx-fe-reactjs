import React from 'react';

const Home = () => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '6rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '1.5rem'
        }}>
          Transform Your Business with 
          <span style={{ color: '#2563eb' }}> Innovation</span>
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#4b5563',
          marginBottom: '3rem',
          lineHeight: 1.6
        }}>
          Leverage our expertise to accelerate your digital transformation and 
          achieve sustainable growth in today's competitive landscape.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {['Innovation', 'Quality', 'Results'].map((title, index) => (
            <div 
              key={index}
              style={{
                ...cardStyle,
                backgroundColor: index === 0 ? '#dbeafe' : 
                                index === 1 ? '#ede9fe' : '#dcfce7'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '1rem'
              }}>{title}</h3>
              <p style={{ color: '#4b5563' }}>
                {title === 'Innovation' 
                  ? 'Pushing boundaries with cutting-edge solutions' 
                  : title === 'Quality' 
                  ? 'Delivering excellence in every project' 
                  : 'Driving meaningful business outcomes'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;