import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchCast from "utils/fetchCast";
import css from './Cast.module.css';


const Cast = () => {
    const [cast, setCast] = useState([]);
  const { movieId } = useParams()
  
  useEffect(() => {
    fetchCast(movieId).then(response => setCast(response.cast))
  }, [movieId]);
  
    return (
      <ul className={css.list}>
        {cast.map(({ profile_path, name, id }) => (
          <li key={id} className={css.item}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
          </li>
        ))}
      </ul>
    );
}

export default Cast;