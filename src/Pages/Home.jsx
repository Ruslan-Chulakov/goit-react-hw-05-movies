import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchMovie from 'utils/fetchTrendingMovies';

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
      <h1>Home page</h1>
      <h3>Trending today</h3>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <Link to={`movies/${id}`} key={id}>
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt=""
              />
              {title}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Home;
