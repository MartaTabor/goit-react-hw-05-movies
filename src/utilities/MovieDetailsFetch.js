import axios from 'axios';
import { API_KEY } from './Api';

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
