import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './SharedHeader.module.css';

export const SharedHeader = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <Link className={css.link} to="/">
            Home
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
