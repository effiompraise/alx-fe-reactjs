function Header() {
  const headerStyles = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '2rem'
  };

  return (
    <header style={headerStyles}>
      <h1 style={{ margin: 0 }}>My Favorite Cities</h1>
    </header>
  );
}
export default Header