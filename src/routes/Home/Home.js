import React, { useState } from "react";
import { searchMovies } from "../../services/services";
import { Link } from "react-router-dom";
import Film from "../../components/Film/Film";
import Loading from "../../components/Loading/Loading";
import "./Home.scss";

function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function SearchMovie() {
    setLoading(true);
    searchMovies(search.toLowerCase())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((e) => {
        setError(
          "...Oops an error occured while trying to search through the database"
        );
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
          onChange={(e) => setSearch(e.target.value.toUpperCase())}
          onKeyPress={(event) => (event.key === "Enter" ? SearchMovie() : null)}
        />
      </div>
      <div className="movies-container">
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="loading-error-container">
            <h2>{error}</h2>
          </div>
        ) : (
          <div className="movie-container">
            {data.map((movie) => (
              <Link to={`/movie/${movie.id}`}>
                <Film data={movie} key={movie.id} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
