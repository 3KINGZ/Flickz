import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Film from "../../components/Film/Film";
import Loading from "../Loading/Loading";
import Up from "../../components/UpNav/Up";
import "./Films.scss";

function NowShowing({ type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let url;

  const getUrls = {
    now_playing:
      "https://api.themoviedb.org/3/movie/now_playing?api_key=52050e6e3220743e0fba6b8a62e6eccf&language=en-US&page=1",
    popular:
      "https://api.themoviedb.org/3/movie/popular?api_key=52050e6e3220743e0fba6b8a62e6eccf&language=en-US&page=1",
    top_rated:
      "https://api.themoviedb.org/3/movie/top_rated?api_key=52050e6e3220743e0fba6b8a62e6eccf&language=en-US&page=1 ",
    upcoming:
      "https://api.themoviedb.org/3/movie/upcoming?api_key=52050e6e3220743e0fba6b8a62e6eccf&language=en-US&page=1",
  };

  if (type.toLowerCase() === "now showing") {
    url = getUrls.now_playing;
  } else if (type.toLowerCase() === "popular") {
    url = getUrls.popular;
  } else if (type.toLowerCase() === "top rated") {
    url = getUrls.top_rated;
  } else if (type.toLowerCase() === "upcoming") {
    url = getUrls.upcoming;
  }

  useEffect(
    () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setData(json.results);
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
    <div className="holder">
      <div className="route-header">
        <h2>{type}</h2>
      </div>
      <div className="movies-container">
        {loading ? (
          <Loading />
        ) : error ? (
          <h2>oops</h2>
        ) : (
          <div className="movie-container">
            {data.map((movie) => (
              <Link to={`/movie/${movie.id}`}>
                <Film data={movie} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <a href="#top">
        <Up />
      </a>
    </div>
  );
}

export default NowShowing;
