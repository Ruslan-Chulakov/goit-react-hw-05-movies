import { Suspense, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import fetchMovieDetails from 'utils/fetchMovieDetails';
import css from './MovieDetails.module.css';

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
    <>
      <Link to={backLinkHref.current} className={css.link}>
        Go back
      </Link>
      <div className={css.position}>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            width="400"
          />
        )}
        <div className={css.info}>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
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
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul className={css.addLinkList}>
          <li>
            <Link to="cast" className={css.addLink}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.addLink}>
              Rewiews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
