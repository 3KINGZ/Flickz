import React from "react";
import up from "../../assets/up-chevron.svg";
import "./Up.scss";

function Up({ data }) {
  return (
    <div className={data ? "up" : "hidden"}>
      <img src={up} alt="go up" width={40} />
    </div>
  );
}

export default Up;
