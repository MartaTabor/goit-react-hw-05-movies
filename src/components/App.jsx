import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedHeader } from './SharedHeader/SharedHeader';

const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
