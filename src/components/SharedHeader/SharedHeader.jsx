import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedHeader.module.css';

export const SharedHeader = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
