import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { fetchMovieDetails } from 'utilities/MovieDetailsFetch';

export const MovieDetails = () => {
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details.data);
        console.log('Movie:', details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading page...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title || movieDetails.name}</h2>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        width={250}
        alt="film poster"
      />
      <p>User Score: {movieDetails.vote_average}</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>
        {movieDetails.genres &&
          movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
      <h3>Additional Details</h3>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
    </div>
  );
};
