import axios from 'axios';
import { API_KEY } from './Api';

export const fetchMoviesByQuery = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
