import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={css.backlink} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
