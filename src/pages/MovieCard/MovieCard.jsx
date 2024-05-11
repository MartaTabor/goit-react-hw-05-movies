import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useParams } from 'react-router-dom';

const MovieCard = () => {
  const { movieId } = useParams();
  return (
    <main>
      <MovieDetails movieId={movieId} />
    </main>
  );
};

export default MovieCard;
