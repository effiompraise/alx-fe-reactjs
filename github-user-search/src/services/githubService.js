import axios from 'axios';


const BASE_URL = 'https://api.github.com';

/**
 * Fetch data for a specific GitHub user
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} - User data from GitHub API
 */
export const fetchUserData = async (username) => {
  try {
    
    const headers = {};
    if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
      headers.Authorization = `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
    }
    
    const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    
    if (error.response) {
      
      if (error.response.status === 404) {
        throw new Error('User not found');
      } else if (error.response.status === 403) {
        throw new Error('API rate limit exceeded. Consider adding a GitHub token.');
      } else {
        throw new Error(`GitHub API Error: ${error.response.status}`);
      }
    } else if (error.request) {
    
      throw new Error('No response from GitHub. Check your network connection.');
    } else {
      
      throw new Error(`Error: ${error.message}`);
    }
  }
};

/**
 * Search for GitHub users (to be used in advanced search features)
 * @param {Object} params - Search parameters
 * @returns {Promise<Object>} - Search results from GitHub API
 */
export const searchUsers = async (params) => {
  try {
  
    let queryString = params.username || '';
    
    if (params.location) {
      queryString += ` location:${params.location}`;
    }
    
    if (params.minRepos) {
      queryString += ` repos:>=${params.minRepos}`;
    }
    
    const headers = {};
    if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
      headers.Authorization = `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
    }
    
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: queryString },
      headers
    });
    
    return response.data;
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};