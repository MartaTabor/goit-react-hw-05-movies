import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../utilities/TrendingMoviesFetch';
import css from './TrendingMovies.module.css';

const TrendingMoviesList = () => {
  const location = useLocation();
  const [fetchedMovies, setFetchedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setFetchedMovies(movies.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <ul className={css.list}>
      {fetchedMovies.map(movie => (
        <li className={css.item} key={movie.id}>
          <Link
            className={css.link}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingMoviesList;
