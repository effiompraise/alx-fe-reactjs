function WelcomeMessage() {
    const welcomeStyles = {
      backgroundColor: '#e9ecef',
      padding: '2rem',
      borderRadius: '8px',
      marginBottom: '2rem',
      textAlign: 'center'
    };
  
    const headingStyles = {
      color: '#2c3e50',
      marginTop: 0
    };
  
    return (
      <div style={welcomeStyles}>
        <h1 style={headingStyles}>Hello everyone, I am learning React at ALX!</h1>
        <p style={{ color: '#666' }}>This is a simple JSX component.</p>
        <p style={{ color: '#666' }}>I am learning about JSX!</p>
      </div>
    );
  }

export default WelcomeMessage;