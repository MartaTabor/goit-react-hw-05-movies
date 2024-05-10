// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { fetchTrendingMovies } from 'components/TrendingMoviesFetch';
import TrendingMoviesList from '../../components/TrendingMovies/TrendingMovies';

const Home = ({ fetchedMovies }) => {
  return (
    <main>
      <h1>Trending Movies Today</h1>
      <TrendingMoviesList fetchedMovies={fetchedMovies} />
    </main>
  );
};

export default Home;
