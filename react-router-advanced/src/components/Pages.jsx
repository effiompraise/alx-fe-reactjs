import React from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Home page
export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our React Router demo!</p>
      <Link to="/blog">View Blog</Link>
    </div>
  );
};

// Login page
export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [username, setUsername] = React.useState('');

  // Get the previous location (or default to home)
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Profile page - Parent route
export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user.username}!</p>
      
      <nav>
        <Link to="/profile">Details</Link> | 
        <Link to="/profile/settings">Settings</Link>
      </nav>
      
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
        {/* This is where nested routes will render */}
        <Outlet />
      </div>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

// Profile Details - Nested route
export const ProfileDetails = () => {
  const { user } = useAuth();
  
  return (
    <div>
      <h2>Profile Details</h2>
      <p>Username: {user.username}</p>
      <p>Member since: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

// Profile Settings - Nested route
export const ProfileSettings = () => {
  return (
    <div>
      <h2>Profile Settings</h2>
      <p>Manage your account settings here.</p>
      <form>
        <label>
          Email Notifications:
          <input type="checkbox" defaultChecked />
        </label>
        <button type="button">Save Settings</button>
      </form>
    </div>
  );
};

// Blog page
export const Blog = () => {
  const posts = [
    { id: 1, title: 'React Router Basics' },
    { id: 2, title: 'Advanced Routing Techniques' },
    { id: 3, title: 'Protected Routes in React' }
  ];
  
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Blog Post page - Dynamic route
export const BlogPost = () => {
  const { postId } = useParams();
  
  // In a real app, you would fetch post data based on the ID
  const post = {
    id: postId,
    title: `Post ${postId}`,
    content: 'This is the content of the blog post.'
  };
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
};

// Not Found page
export const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};