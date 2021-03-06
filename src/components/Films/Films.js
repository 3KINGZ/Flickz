import React, { useState, useEffect } from "react";
import { filterString } from "../../utils/filterStrings";

import { request } from "../../services/services";
import Film from "../../components/Film/Film";
import Loading from "../Loading/Loading";
import Up from "../../components/UpNav/Up";
import "./Films.scss";

function Films({ type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => {
      setLoading(false);
      request(type)
        .then((data) => {
          setData(data.results);
          setError("");
          setLoading(false);
        })
        .catch((e) => {
          setError("...Oops an error occured while fetching data");
          setLoading(false);
        });
    },
    //eslint-disable-next-line
    []
  );

  return (
    <div className="holder">
      <div className="route-header">
        <h2>{filterString(type)}</h2>
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
              <Film data={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
      <a href="#top">
        <Up data={data.length > 0 ? true : false} />
      </a>
    </div>
  );
}

export default Films;
