import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './SharedHeader.module.css';

export const SharedHeader = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <Link className={css.link} to="/" end>
            Home
          </Link>
          <Link className={css.link} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
