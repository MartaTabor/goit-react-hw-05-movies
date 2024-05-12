import { useEffect, useState, Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'utilities/MovieDetailsFetch';
import { PageNotFound } from 'components/PageNotFound/PageNotFound';
import { BackLink } from 'components/BackLink/BackLink';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(true);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading page...</div>;
  }

  if (error) {
    return <PageNotFound />;
  }

  return (
    <div>
      <BackLink to={backLinkHref}>Back to Movies</BackLink>
      <div className={css.container}>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : defaultImg
          }
          width={250}
          alt="film poster"
        />
        <div className={css.info}>
          <h2>{movieDetails.title || movieDetails.name}</h2>
          <p>User Score: {movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>
            {movieDetails.genres &&
              movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <div className={css.add_details}>
        <h3>Additional Details</h3>
        <nav className={css.navigation}>
          <NavLink
            className={navData => (navData.isActive ? css.active : css.link)}
            to="cast"
          >
            Cast
          </NavLink>
          <NavLink
            className={navData => (navData.isActive ? css.active : css.link)}
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
