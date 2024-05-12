import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utilities/ReviewsFetch';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const reviewsData = await fetchReviews(movieId);
        setMovieReviews(reviewsData.data.results);
        console.log('Reviews:', reviewsData);
      } catch (error) {
        console.error('Eror fetching cast data:', error);
      }
    };
    fetchReviewsData();
  }, [movieId]);

  return (
    <ul>
      {movieReviews.map(review => (
        <li key={review.id}>
          <h3>Username: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
