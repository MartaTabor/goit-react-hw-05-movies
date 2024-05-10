import axios from 'axios';
import { API_KEY } from './Api';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
