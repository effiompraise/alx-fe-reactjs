import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! Thank you for your message.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb',
      padding: '2rem',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '6rem 1rem',
        width: '100%'
      }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Let's Connect
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            marginBottom: '1rem'
          }}>
            We'd love to hear about your next project
          </p>
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
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <form onSubmit={handleSubmit} style={{ 
            display: 'grid', 
            gap: '2rem',
            width: '100%'
          }}>
            <div style={{ width: '100%' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: '#f9fafb'
                }}
                placeholder="John Doe"
              />
            </div>

            <div style={{ width: '100%' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: '#f9fafb'
                }}
                placeholder="john@company.com"
              />
            </div>

            <div style={{ width: '100%' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  resize: 'vertical',
                  backgroundColor: '#f9fafb'
                }}
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;