import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'utilities/CastFetch';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const castData = await fetchCast(movieId);
        setMovieCast(castData.data.cast);
      } catch (error) {
        console.error('Eror fetching cast data:', error);
      }
    };
    fetchCastData();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {movieCast.map(person => (
        <li className={css.item} key={person.id}>
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
          <p className={css.role}>
            <span className={css.role_span}>Role:</span>{' '}
            <span className={css.role_name}>
              {person.character === '' ? 'unknown' : person.character}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
