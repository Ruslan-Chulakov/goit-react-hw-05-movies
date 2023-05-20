import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import fetchMovieDetails from 'utils/fetchMovieDetails';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const { poster_path, overview, title, vote_average, genres } = movieData;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
    
  useEffect(() => {
    fetchMovieDetails(movieId).then(response => setMovieData(response));
  }, [movieId]);

//   console.log(movieData);
  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      <h2>{title}</h2>
      <p>User score: {vote_average}</p>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          width="400"
        />
      )}
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && (
        <ul>
          {genres.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
      <h4>Additional information</h4>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Rewiews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
