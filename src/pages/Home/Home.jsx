import PropTypes from 'prop-types';

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

Home.propTypes = {
  fetchedMovies: PropTypes.array,
};

export default Home;
