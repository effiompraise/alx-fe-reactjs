import { useState, useEffect } from 'react';
import { fetchUserData, fetchUserRepos } from '../services/githubService';

function UserDetail({ username, onClose }) {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [user, repos] = await Promise.all([
          fetchUserData(username),
          fetchUserRepos(username)
        ]);
        
        setUserData(user);
        setUserRepos(repos);
      } catch (error) {
        setError('Failed to load user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    loadUserData();
  }, [username]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 h-16 w-16"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return userData && (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
        <h3 className="text-lg font-semibold">User Details</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Close</span>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="px-6 py-4">
        <div className="flex items-center space-x-4">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login} avatar`} 
            className="h-20 w-20 rounded-full"
          />
          <div>
            <h4 className="text-xl font-bold">{userData.name || userData.login}</h4>
            <p className="text-sm text-gray-500">@{userData.login}</p>
          </div>
        </div>
        
        {userData.bio && (
          <div className="mt-4">
            <p className="text-sm text-gray-700">{userData.bio}</p>
          </div>
        )}
        
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-b py-4">
          <div>
            <p className="text-sm text-gray-500">Followers</p>
            <p className="text-xl font-semibold">{userData.followers}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Following</p>
            <p className="text-xl font-semibold">{userData.following}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Public Repos</p>
            <p className="text-xl font-semibold">{userData.public_repos}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Public Gists</p>
            <p className="text-xl font-semibold">{userData.public_gists}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h5 className="text-lg font-semibold mb-3">User Information</h5>
          <ul className="space-y-2">
            {userData.company && (
              <li className="flex items-center text-sm">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm2 5h2v2H9v-2z" clipRule="evenodd" />
                </svg>
                <span>{userData.company}</span>
              </li>
            )}
            {userData.location && (
              <li className="flex items-center text-sm">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{userData.location}</span>
              </li>
            )}
            {userData.email && (
              <li className="flex items-center text-sm">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{userData.email}</span>
              </li>
            )}
            {userData.blog && (
              <li className="flex items-center text-sm">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                <a href={userData.blog} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {userData.blog}
                </a>
              </li>
            )}
            {userData.created_at && (
              <li className="flex items-center text-sm">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Joined on {new Date(userData.created_at).toLocaleDateString()}</span>
              </li>
            )}
          </ul>
        </div>
        
        {userRepos.length > 0 && (
          <div className="mt-6">
            <h5 className="text-lg font-semibold mb-3">Recent Repositories</h5>
            <ul className="space-y-3">
              {userRepos.map(repo => (
                <li key={repo.id} className="border p-3 rounded-md hover:bg-gray-50">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {repo.name}
                  </a>
                  {repo.description && (
                    <p className="text-sm text-gray-700 mt-1">{repo.description}</p>
                  )}
                  <div className="flex items-center mt-2 text-xs text-gray-500 space-x-4">
                    {repo.language && (
                      <span className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-blue-500 mr-1"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center">
                      <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                      {repo.forks_count}
                    </span>
                    <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <a 
                href={`https://github.com/${username}?tab=repositories`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View all repositories
              </a>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <a 
            href={userData.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;