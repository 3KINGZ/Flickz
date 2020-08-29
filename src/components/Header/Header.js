import React from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";

function Header() {
  return (
    <div className="header-container">
      <h1 className="header">Flickz</h1>
      <Nav />
    </div>
  );
}

export default Header;
