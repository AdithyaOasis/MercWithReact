import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header_Clubs from "./Page_Headers/Header_Clubs";
import Header_Home from "./Page_Headers/Header_Home";
import Header_Projects from "./Page_Headers/Header_Projects";

export class Main_Header extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };
  render() {
    return (
      <div>
        <span style={{ backgroundColor: "grey", width: "100%" }}>
          <a className="btn btn-primary " href="/#/login">
            Login
          </a>
        </span>
        <div className="jumbotron text-center">
          <Router>
            <Switch>
              <Route path="/Home" component={Header_Home} />
              <Route exact path="/" component={Header_Home} />
              <Route path="/club" component={Header_Clubs} />
              <Route path="/project" component={Header_Projects} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.user,
});

export default connect(mapStateToProps)(Main_Header);
