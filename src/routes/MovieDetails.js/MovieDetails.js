import React, { useState, useEffect } from "react";
import genres from "../../genredata";

function MovieDetails() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/284054?api_key=52050e6e3220743e0fba6b8a62e6eccf"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
        setLoading(false);
      })
      .catch((error) => {
        setError("...oops an error occured while loading page");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`}
          alt={`${data.original_title} poster`}
        />
      </div>
      <div>
        <div>
          <h2>{data.original_title}</h2>
        </div>
        <div>{data.overview}</div>
        <div className="genre">
          {data.genre_ids.map((g_id) => (
            <div className={genres[`_${g_id}`] === "action" ? }>{genres[`_${g_id}`]} </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
