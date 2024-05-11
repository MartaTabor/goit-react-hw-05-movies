import { SearchBox } from 'components/SearchBox/SearchBox';
import { SearchedMoviesList } from 'components/SearchedMoviesList/SearchedMoviesList';

const Movies = ({ movies }) => {
  return (
    <main>
      <SearchBox />
      <SearchedMoviesList movies={movies} />
    </main>
  );
};

export default Movies;
