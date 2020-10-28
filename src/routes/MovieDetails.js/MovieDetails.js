import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../../services/services";
import "./MovieDetails.scss";

function MovieDetails({ match }) {
  const [data, setData] = useState({ genres: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovieDetails(match.params.id)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        setError("...Oops an error occured while fetching movie details");
        setLoading(false);
      });
  });

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
            <div className="vote-average">{data.vote_average}</div>
            <div className="genres">
              {data.genres.map((genre) => (
                <div key={genre.id} className="genre">
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="trailer">
              <iframe
                title="trailer"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
