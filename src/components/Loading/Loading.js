import React from "react";
import spinner from "../../assets/Spin-1s-200px.svg";
import "./Loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Loading;
