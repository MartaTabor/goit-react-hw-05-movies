import axios from 'axios';
import { API_KEY } from './Api';

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error('Error fetching cast:', error);
    throw error;
  }
};
