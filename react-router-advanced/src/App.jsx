
import ProtectedRoute from './components/ProtectedRoute';

import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import { 
  Home, 
  Login, 
  Profile, 
  ProfileDetails, 
  ProfileSettings, 
  Blog, 
  BlogPost, 
  NotFound 
} from './components/Pages';
import './App.css';

// Navigation component
const Navigation = () => {
  const { user } = useAuth();
  
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {user ? (
          <li><Link to="/profile">Profile</Link></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navigation />
          
          <main className="content">
            <Routes>
              {/* Basic route */}
              <Route path="/" element={<Home />} />
              
              {/* Login route */}
              <Route path="/login" element={<Login />} />
              
              {/* Protected routes */}
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }>
                {/* Nested routes */}
                <Route index element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>
              
              {/* Dynamic routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;