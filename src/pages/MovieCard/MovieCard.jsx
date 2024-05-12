import PropTypes from 'prop-types';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useParams } from 'react-router-dom';

const MovieCard = ({ movieDetails }) => {
  const { movieId } = useParams();
  return (
    <main>
      <MovieDetails movieId={movieId} movieDetails={movieDetails} />
    </main>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.array,
};

export default MovieCard;
