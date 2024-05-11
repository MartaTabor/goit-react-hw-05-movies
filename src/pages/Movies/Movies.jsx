import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from '../../utilities/MoviesByQueryFetch';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

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
      console.log('Movies:', movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <main>
      <SearchBox />
      {query && <h2>Search Results:</h2>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
