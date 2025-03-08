import { useState } from 'react';

const ProfileSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings updated:', settings);
  };

  return (
    <div className="settings-container">
      <h3>Profile Settings</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Email Notifications:
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
            />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Theme:
            <select
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
        
        <button type="submit" className="save-button">Save Settings</button>
      </form>
    </div>
  );
};

export default ProfileSettings;