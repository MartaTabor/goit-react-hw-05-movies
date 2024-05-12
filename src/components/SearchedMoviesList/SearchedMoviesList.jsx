import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from '../../utilities/MoviesByQueryFetch';
import css from './SearchedMoviesList.module.css';

export const SearchedMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  const [noResults, setNoResults] = useState(false);

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
      if (movies.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        setMovies(movies);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      {query && <h2>Search Results:</h2>}
      {noResults && query && <p>No matching movies in our database.</p>}
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
