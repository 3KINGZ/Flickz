import React, { useState, useEffect } from "react";
import Film from "../../components/Film/Film";
import "./popular.scss";

function Popular() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=52050e6e3220743e0fba6b8a62e6eccf&language=en-US&page=1"
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
    <div className="popular">
      <h2>Popular</h2>
      <div className="movies-container">
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h2>oops</h2>
        ) : (
          <div className="movie-container">
            {data.map((movie) => (
              <Film data={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Popular;
