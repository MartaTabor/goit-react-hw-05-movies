import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from '../../utilities/MoviesByQueryFetch';
import css from './SearchedMoviesList.module.css';

export const SearchedMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    } else {
      setMovies([]);
    }
  }, [query]);

  const fetchMovies = async query => {
    try {
      const movies = await fetchMoviesByQuery(query);
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      {query && <h2>Search Results:</h2>}
      <ul className={css.list}>
        {movies.map(movie => (
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
    </div>
  );
};
