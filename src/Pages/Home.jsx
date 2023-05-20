import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchMovie from 'utils/fetchTrendingMovies';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      fetchMovie()
        .then(response => response.results)
        .then(results => setMovies(results));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.list}>
        {movies.map(({ id, title, poster_path }) => (
          <li className={css.item}>
            <Link to={`movies/${id}`} key={id} className={css.link}>
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt=""
              />
              <p className={css.filmName}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
