import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchReviews from 'utils/fetchReviews';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(response => setReviews(response.results));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {reviews.map(({ author, content }) => (
        <li className={css.item}>
          <p>Author: {author}.</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
