import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async (username, location, minRepos, page = 1) => {
  try {
    let query = username;
    
    
    if (location && location.trim() !== '') {
      query += `+location:${location}`;
    }
    
    
    if (minRepos && !isNaN(parseInt(minRepos))) {
      query += `+repos:>=${minRepos}`;
    }
    
    
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`;
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=updated`);
    return response.data;
  } catch (error) {
    throw error;
  }
};