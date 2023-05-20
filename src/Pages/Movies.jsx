import { useEffect } from "react";
import { useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import fetchSearchMovie from "utils/fetchSearchMovie"

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');
  const location = useLocation()
  
  useEffect(() => {
    if (movieName) {
      fetchSearchMovie(movieName.trim()).then(response =>
        setSearchResults(response.results)
      );
    }
  }, [movieName])
 
  const handleChange = (evt) => {
    const query = evt.target.value;
    setQuery(query);
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    
    if (query === '') {
      return
    }

    setSearchParams({ movieName: query.trim() });
    fetchSearchMovie(movieName) 
      .then(response => setSearchResults(response.results));
    
    setQuery('');
  }
  
    return (
      <main>
        <h1>Movies page</h1>

        <form onSubmit={handleSubmit}>
          <label>
            search
            <input type="text" value={query} onChange={handleChange} />
          </label>
          <button>Find Movie</button>
        </form>

        <ul>
          {(searchResults.length !==0) ? searchResults.map(({id, title, poster_path}) => (
            <Link to={`${id}`} key={id} state={{from: location}}>
              <li>
                { poster_path && <img
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt=""
                />}
                {title}
              </li>
            </Link>
          )) : ( <p>No results</p>  )}
        </ul>
      </main>
    );
}

export default Movies;