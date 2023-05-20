import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchCast from "utils/fetchCast";


const Cast = () => {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams()
    useEffect(() => {
        fetchCast(movieId).then(response => setCast(response.cast))
    }, [movieId])
    return (
      <div>
        <h5>cast info</h5>
        {cast.map(({ profile_path, name, id }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
          </li>
        ))}
      </div>
    );
}

export default Cast;