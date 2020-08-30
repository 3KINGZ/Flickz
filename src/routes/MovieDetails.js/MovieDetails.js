import React, { useState, useEffect } from "react";
import "./MovieDetails.scss";

function MovieDetails({ match }) {
  const [data, setData] = useState({ genres: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=52050e6e3220743e0fba6b8a62e6eccf`
      )
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((error) => {
          setError("...oops an error occured while loading page");
          setLoading(false);
        });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <h1>error...</h1>
      ) : (
        <div
          className="moviez"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
          }}
        >
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt={`${data.original_title} poster`}
            />
          </div>
          <div>
            <div>
              <h2>{data.original_title}</h2>
            </div>
            <div className="overview">{data.overview}</div>
            <div className="genres">
              {data.genres.map((genre) => (
                <div key={genre.id} className="genre">
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="trailer">
              <iFrame src="https://www.youtube.com/embed/tgbNymZ7vqY"></iFrame>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
