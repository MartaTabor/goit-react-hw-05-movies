// // import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../TrendingMoviesFetch';

const TrendingMoviesList = () => {
  const location = useLocation();
  const [fetchedMovies, setFetchedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        console.log('Movies:', movies);
        setFetchedMovies(movies.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <ul>
      {fetchedMovies.map(movie => (
        <li key={movie.id}>
          <Link to={movie.id} state={{ from: location }}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingMoviesList;
