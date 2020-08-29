import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Film from "../../components/Film/Film";
import "./Home.scss";

function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function SearchMovie() {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=52050e6e3220743e0fba6b8a62e6eccf&language=en-US&page=1&query=${search}&include_adult=false`
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
  }

  return (
    <div className="home">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(event) => (event.key === "Enter" ? SearchMovie() : null)}
        />
      </div>
      <div className="movies-container">
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h2>oops</h2>
        ) : (
          <div className="movie-container">
            {data.map((movie) => (
              <Link>
                <Film data={movie} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
