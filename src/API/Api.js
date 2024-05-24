import axios from 'axios';

const API_KEY = 'ddd78f0e80e0d30735adfd081ca2dc47';
const baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = baseURL;

export const getTrending = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getQuery = async (query) => {
  try {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies by query:', error);
    return [];
  }
};

export const getDetails = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getCast = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    return [];
  }
};

export const getReviews = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};

export const getMoviesByKeyword = async (keyword) => {
  try {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${keyword}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies by keyword:', error);
    return [];
  }
};
