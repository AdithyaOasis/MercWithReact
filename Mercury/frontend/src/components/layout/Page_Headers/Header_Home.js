import React, { Component } from "react";

import { Link } from "react-router-dom";
export class Header_Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Mercury</h1>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <Link className="navbar-brand col-sm-4" to="/">
              Home
            </Link>

            <Link className="navbar-brand col-sm-4" to="/Home/clubs">
              Clubs
            </Link>

            <Link className="navbar-brand col-sm-4" to="/Home/profile">
              Profile
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header_Home;
