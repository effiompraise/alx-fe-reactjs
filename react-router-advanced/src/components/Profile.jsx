import { Outlet, Link, Routes, Route } from 'react-router-dom';

// Define the nested components within the same file
const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <h3>Profile Details</h3>
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
      <p>Member since: January 2024</p>
    </div>
  );
};

const ProfileSettings = () => {
  return (
    <div className="profile-settings">
      <h3>Profile Settings</h3>
      <form>
        <div className="form-group">
          <label>Email notifications</label>
          <input type="checkbox" defaultChecked />
        </div>
        <div className="form-group">
          <label>Dark mode</label>
          <input type="checkbox" />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      
      <nav className="profile-nav">
        <Link 
          to="" 
          className="nav-link"
          end
        >
          Details
        </Link>
        <Link 
          to="settings" 
          className="nav-link"
        >
          Settings
        </Link>
      </nav>

      <div className="profile-content">
        <Routes>
          <Route index element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;