import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Technology Strategy",
      description: "Architecting future-proof digital ecosystems aligned with business objectives",
      icon: "💻"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end modernization of business processes and customer experiences",
      icon: "🚀"
    },
    {
      title: "Data Analytics",
      description: "Turning complex data into actionable business insights",
      icon: "📊"
    }
  ];

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
            Our Expertise
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Strategic solutions designed to drive innovation and accelerate growth
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: 1.6
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;