// // import PropTypes from 'prop-types';
// import { Link, useLocation } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import { fetchTrendingMovies } from '../TrendingMoviesFetch';

// export const TrendingMoviesList = ({ fetchedMovies }) => {
//   const location = useLocation();
//   const [fetchedMovies, setFetchedMovies] = useState([]);
//   const effectRan = useRef(false);

//   useEffect(() => {
//     // if dodany zeby nie wyswietlal Movies dwa razy.
//     if (effectRan.current || process.env.NODE_ENV !== 'development') {
//       const fetchMovies = async () => {
//         try {
//           const moviesData = await fetchTrendingMovies();
//           console.log('Movies:', moviesData);
//           setFetchedMovies(moviesData.results);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
//       fetchMovies();
//     }
//     return () => (effectRan.current = true);
//   }, []);

//   return (
//     <ul>
//       {fetchedMovies.map(movie => (
//         <li key={movie.id}>
//           <Link to={movie.id} state={{ from: location }}>
//             {movie.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };
