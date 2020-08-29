import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/" exact className="link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/popular" className="link" activeClassName="active">
        Popular
      </NavLink>
      <NavLink to="/top-rated" exact className="link" activeClassName="active">
        Top Rated
      </NavLink>
      <NavLink to="now-showing" exact className="link" activeClassName="active">
        Now Showing
      </NavLink>
      <NavLink to="up-coming" exact className="link" activeClassName="active">
        Up Coming
      </NavLink>
    </div>
  );
}

export default Nav;
