import TrendingMoviesList from '../../components/TrendingMovies/TrendingMovies';
import css from './Home.module.css';

const Home = ({ fetchedMovies }) => {
  return (
    <main>
      <div className={css.container}>
        <h1>Trending Movies Today</h1>
        <TrendingMoviesList fetchedMovies={fetchedMovies} />
      </div>
    </main>
  );
};

export default Home;
