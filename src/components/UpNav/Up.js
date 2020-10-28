import React from "react";
import up from "../../assets/up-chevron.svg";
import "./Up.scss";

function Up({ data }) {
  return (
    <div className={data ? "up" : "hidden"}>
      <img src={up} alt="go up" />
    </div>
  );
}

export default Up;
