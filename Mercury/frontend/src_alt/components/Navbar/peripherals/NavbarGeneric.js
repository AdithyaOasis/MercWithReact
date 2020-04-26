import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

export class NavbarGeneric extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/#/home">
                    Mercury
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={this.props.link1}>
                    {this.props.link1Name} <i className="fas fa-home"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={this.props.link2}>
                    {this.props.link2Name}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={this.props.link3}>
                    {this.props.link3Name}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={this.props.link4}>
                    {this.props.link4Name}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto order-0">
              <Link className="nav-item nav-link" to={this.props.centralLink}>
                {this.props.centralLinkName}
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".dual-collapse2"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-item nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}

export default NavbarGeneric;
