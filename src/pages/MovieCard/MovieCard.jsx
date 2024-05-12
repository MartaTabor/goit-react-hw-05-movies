import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useParams } from 'react-router-dom';

const MovieCard = ({ movieDetails, movieCast }) => {
  const { movieId } = useParams();
  return (
    <main>
      <MovieDetails movieId={movieId} movieDetails={movieDetails} />
    </main>
  );
};

export default MovieCard;
