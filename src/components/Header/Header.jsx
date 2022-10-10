import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand ps-2" href="/">
        AlloMovie
      </a>
      <button className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/favoris"
              activeClassName="active"
            >
              Favoris
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
