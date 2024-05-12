import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'utilities/CastFetch';
import { PageNotFound } from 'components/PageNotFound/PageNotFound';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const castData = await fetchCast(movieId);
        setMovieCast(castData.data.cast);
        console.log('Cast:', castData);
      } catch (error) {
        console.error('Eror fetching cast data:', error);
        setError(true);
      }
    };
    fetchCastData();
  }, [movieId]);

  if (error) {
    return <PageNotFound />;
  }

  return (
    <ul>
      {movieCast.map(person => (
        <li key={person.id}>
          <h3>{person.name}</h3>
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : defaultImg
            }
            width={150}
            alt={person.name}
          />
          <p>
            In the movie as:{' '}
            {person.character === '' ? 'unknown' : person.character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
