import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import fetchSearchMovie from 'utils/fetchSearchMovie';
import css from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');
  const location = useLocation();

  useEffect(() => {
    if (movieName) {
      fetchSearchMovie(movieName.trim()).then(response =>
        setSearchResults(response.results)
      );
    }
  }, [movieName]);

  const handleChange = evt => {
    const query = evt.target.value;
    setQuery(query);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query === '') {
      return;
    }

    setSearchParams({ movieName: query.trim() });
    fetchSearchMovie(movieName).then(response =>
      setSearchResults(response.results)
    );

    setQuery('');
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <button className={css.button}>Find Movie</button>
      </form>

      <ul className={css.list}>
        {searchResults.length !== 0 ? (
          searchResults.map(({ id, title, poster_path }) => (
            <li className={css.item}>
              <Link to={`${id}`} key={id} state={{ from: location }} className={css.link}>
                {poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    alt=""
                  />
                )}
                <p className={css.filmName}>{title}</p>
              </Link>
            </li>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </main>
  );
};

export default Movies;
