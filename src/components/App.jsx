import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedHeader } from './SharedHeader/SharedHeader';
import { PageNotFound } from './PageNotFound/PageNotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieCard = lazy(() => import('../pages/MovieCard/MovieCard'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
