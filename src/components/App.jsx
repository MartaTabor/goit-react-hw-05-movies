import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { SharedHeader } from './SharedHeader/SharedHeader';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
