import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utilities/ReviewsFetch';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const reviewsData = await fetchReviews(movieId);
        setMovieReviews(reviewsData.data.results);
      } catch (error) {
        console.error('Eror fetching cast data:', error);
      }
    };
    fetchReviewsData();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {!movieReviews ||
        (movieReviews.length === 0 && <div>There is no reviews yet.</div>)}
      {movieReviews.map(review => (
        <li className={css.item} key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
