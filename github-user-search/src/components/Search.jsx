import { useState, useEffect } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [searchForm, setSearchForm] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    // After the initial render, set the flag to false
    setIsInitialRender(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchForm({
      ...searchForm,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setCurrentPage(1);
    
    try {
      const results = await searchUsers(
        searchForm.username, 
        searchForm.location, 
        searchForm.minRepos, 
        1
      );
      setSearchResults(results);
    } catch (error) {
      setError('Error searching for users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadMoreResults = async () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    
    try {
      const moreResults = await searchUsers(
        searchForm.username, 
        searchForm.location, 
        searchForm.minRepos, 
        nextPage
      );
      
      setSearchResults({
        ...moreResults,
        items: [...searchResults.items, ...moreResults.items]
      });
      
      setCurrentPage(nextPage);
    } catch (error) {
      setError('Error loading more results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className={`bg-white rounded-lg shadow-lg p-6 mb-6 transition-all duration-500 ${isInitialRender ? '' : 'fade-in'}`}>
        <h2 className="text-xl font-bold mb-4 text-blue-700">GitHub User Search</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="transition-all duration-300 hover:scale-[1.02]">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={searchForm.username}
                onChange={handleInputChange}
                placeholder="e.g. octocat"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                required
              />
            </div>
            
            <div className="transition-all duration-300 hover:scale-[1.02]">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={searchForm.location}
                onChange={handleInputChange}
                placeholder="e.g. San Francisco"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>
            
            <div className="transition-all duration-300 hover:scale-[1.02]">
              <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Repositories
              </label>
              <input
                type="number"
                id="minRepos"
                name="minRepos"
                value={searchForm.minRepos}
                onChange={handleInputChange}
                placeholder="e.g. 10"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading-spinner mr-2 inline-block h-4 w-4"></span>
                  Searching...
                </>
              ) : 'Search'}
            </button>
          </div>
        </form>
      </div>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 slide-in-up">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      {searchResults.items && searchResults.items.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-in-up">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-lg font-semibold text-blue-700">
              Results ({searchResults.total_count} users found)
            </h3>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {searchResults.items.map((user, index) => (
              <li key={user.id} className={`px-6 py-4 hover:bg-blue-50 transition-all duration-300 staggered-item`}>
                <div className="flex items-center">
                  <img 
                    src={user.avatar_url} 
                    alt={`${user.login} avatar`} 
                    className="h-12 w-12 rounded-full mr-4 shadow-md hover:shadow-lg transition-all duration-300"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user.login}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      <a 
                        href={user.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600 transition-colors duration-300"
                      >
                        View Profile
                      </a>
                    </p>
                  </div>
                  <a
                    href={`/user/${user.login}`}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105"
                  >
                    Details
                  </a>
                </div>
              </li>
            ))}
          </ul>
          
          {searchResults.total_count > searchResults.items.length && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <button
                onClick={loadMoreResults}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading-spinner mr-2 inline-block h-4 w-4"></span>
                    Loading...
                  </>
                ) : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}
      
      {searchResults.items && searchResults.items.length === 0 && !loading && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 slide-in-up">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                No users found matching your search criteria.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;