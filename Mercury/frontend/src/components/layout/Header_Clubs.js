import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Header_Clubs extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div>
            <h1>Mercury</h1>
          </div>
          <div className="container">
            <nav className="navbar navbar-expand-lg ">
              <Link className="navbar-brand col-sm-4" to="/club">
                Home
              </Link>

              <Link className="navbar-brand col-sm-4" to="/club/Projects">
                Projects
              </Link>

              <Link className="navbar-brand col-sm-4" to="/club/Members">
                Members
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header_Clubs;
