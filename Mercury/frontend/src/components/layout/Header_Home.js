import React, { Component } from "react";

export class Header_Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div>
            <h1>Mercury</h1>
          </div>
          <div className="container">
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand col-sm-4" href="#">
                Home
              </a>
              <a className="navbar-brand col-sm-4" href="#">
                Clubs
              </a>
              <a className="navbar-brand col-sm-4" href="#">
                Profile
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header_Home;
