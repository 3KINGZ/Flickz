import React from "react";
import genres from "../../assets/data/genre-data";
import broken from "../../assets/broken.svg";
import "./Film.scss";

function Film({ data }) {
  return (
    <div className="film">
      {data.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`}
          alt={`${data.original_title} poster`}
        />
      ) : (
        <img src={broken} alt="no-poster" className="broken" />
      )}

      <div className="film-details">
        <div className="title-rating">
          <div className="film-title">{data.original_title}</div>
          <div>{data.vote_average}</div>
        </div>
        <div className="genre">
          {data.genre_ids.map((g_id, index) => (
            <span key={index}>{genres[`_${g_id}`]} </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Film;
