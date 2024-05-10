import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedHeader } from './SharedHeader/SharedHeader';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <div>
      <SharedHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
