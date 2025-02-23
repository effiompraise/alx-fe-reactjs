function MainContent() {
  const mainStyles = {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  return (
    <main style={mainStyles}>
      <p style={{ fontSize: '1.2rem', color: '#2c3e50' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent