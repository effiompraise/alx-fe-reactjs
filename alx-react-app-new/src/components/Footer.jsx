function Footer() {
  const footerStyles = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '8px',
    marginTop: '2rem'
  };

  return (
    <footer style={footerStyles}>
      <p style={{ margin: 0 }}>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer