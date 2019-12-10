import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="menu-nav">
        <div className="menu-nav--left">
          <Link to="/">Phone Market</Link>
        </div>
        <div className="menu-nav--right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AddPhone">Add</Link>
            </li>
            <li>
              <Link to="/Edit">Modify</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
