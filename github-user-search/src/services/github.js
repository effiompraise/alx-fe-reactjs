import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error getting user details:', error);
    throw error;
  }
};