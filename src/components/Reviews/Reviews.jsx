import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchReviews from "utils/fetchReviews";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchReviews(movieId).then(response => setReviews(response.results))
    }, [movieId]);
    
    return (
      <div>
        <h4>Reviews info</h4>
            <ul>
                {reviews.map(({ author, content }) => (
                    <li>
                        <p>Author: {author}.</p>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
      </div>
    );
}

export default Reviews; 