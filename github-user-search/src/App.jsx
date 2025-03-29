// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const Header = () => (
  <header className="app-header">
    <div className="container">
      <h1>GitHub User Search</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="app-footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} GitHub User Search App</p>
    </div>
  </footer>
);


const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };
  
  return (
    <div className="home-page">
      <div className="search-container">
        <h2>Search for GitHub Users</h2>
        <form onSubmit={handleSubmit}>
          <div className="search-input">
            <input 
              type="text" 
              placeholder="Enter a GitHub username..." 
              value={searchQuery} 
              onChange={handleSearchChange} 
            />
            <button type="submit">Search</button>
          </div>
        </form>
        
        <div className="search-results">
          {/* Results will be displayed here */}
          {searchQuery && (
            <p>Results for: {searchQuery}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="about-page">
    <h2>About This App</h2>
    <p>This application allows you to search for GitHub users using the GitHub API.</p>
    <p>You can view basic profile information and navigate to their GitHub profiles.</p>
    <p>Built with React and the GitHub API.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <main className="app-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;