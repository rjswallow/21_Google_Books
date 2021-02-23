import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-nav navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <li className="nav-item">
        <a className="nav-link" href="/search">Search </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Save </a>
      </li>
    </nav>
  );
}

export default Nav;
