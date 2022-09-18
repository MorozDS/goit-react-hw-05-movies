import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import ReviewsItem from 'components/ReviewsItem';


export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 && <p> No reviews available at this time</p>}

      {reviews?.map(item => (
        <li key={item.id}>
          <ReviewsItem {...item} />
        </li>
      ))}
    </ul>
  );
}
