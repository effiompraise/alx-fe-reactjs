import { useState } from 'react';
import Search from './components/Search'
import UserDetail from './components/UserDetail'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Header = () => (
  <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GitHub User Search</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-100 py-4 mt-8">
    <div className="container mx-auto px-4 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} GitHub User Search App</p>
    </div>
  </footer>
);

// Page Components
const HomePage = () => (
  <div className="home-page">
    <Search />
  </div>
);

const AboutPage = () => (
  <div className="about-page max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">About This App</h2>
    <p className="mb-4">This application allows you to search for GitHub users using the GitHub API.</p>
    <p className="mb-4">You can view basic profile information and navigate to their GitHub profiles.</p>
    <p>Built with React and the GitHub API.</p>
  </div>
);

// Main App Component
function App() {
  return (
    <Router>
      <div className="app min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4">
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