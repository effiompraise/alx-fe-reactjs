import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Advanced Routing Demo</h2>
      <div className="navigation-links">
        <Link to="/posts" className="nav-button">View Posts</Link>
        <Link to="/profile" className="nav-button">View Profile</Link>
      </div>
    </div>
  );
};

export default Home;