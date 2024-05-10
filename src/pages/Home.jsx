import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/TrendingMoviesFetch';

const Home = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setFetchedMovies(movies.data.results);
        console.log('Movies:', movies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending Movies Today</h1>
      <ul>
        {fetchedMovies.map(movie => (
          <li key={movie.id}>
            <li key={movie.id}>{movie.title || movie.name}</li>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
