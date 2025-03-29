import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    setUserData(null);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>

      <div className="result-container">
        {loading && <p className="text-gray-600">Loading...</p>}
        
        {error && (
          <div className="error-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        {userData && !loading && !error && (
          <div className="user-card bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={userData.avatar_url} 
                  alt={`${userData.login}'s avatar`} 
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-xl font-bold mb-2">
                  {userData.name || userData.login}
                </h2>
                <p className="text-gray-600 mb-4">@{userData.login}</p>
                
                {userData.bio && (
                  <p className="text-gray-700 mb-4">{userData.bio}</p>
                )}
                
                <div className="stats grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-gray-600">Followers:</span> {userData.followers}
                  </div>
                  <div>
                    <span className="text-gray-600">Following:</span> {userData.following}
                  </div>
                  <div>
                    <span className="text-gray-600">Repositories:</span> {userData.public_repos}
                  </div>
                  {userData.location && (
                    <div>
                      <span className="text-gray-600">Location:</span> {userData.location}
                    </div>
                  )}
                </div>
                
                <a 
                  href={userData.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;