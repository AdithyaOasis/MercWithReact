import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Header_Projects extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div>
            <h1>Mercury</h1>
          </div>

          <div className="container">
            <nav className="navbar navbar-expand-lg ">
              <Link className="navbar-brand col-sm-4" to="/project/">
                Home
              </Link>

              <Link className="navbar-brand col-sm-4" to="/project/desc">
                Desc
              </Link>

              <Link className="navbar-brand col-sm-4" to="/project/members">
                Members
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header_Projects;
