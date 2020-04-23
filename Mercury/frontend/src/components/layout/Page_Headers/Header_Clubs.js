import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clubExit } from "../../../actions/clubs";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
export class Header_Clubs extends Component {
  back = () => {
    this.props.clubExit();
    this.props.history.push("/");
  };
  render() {
    if (!this.props.club) {
      return <Fragment></Fragment>;
    }
    return (
      <Router>
        <div>
          <div>
            <h1>{this.props.club.club_name}</h1>
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
            <button className="btn btn-primary" onClick={this.back}>
              Go Home
            </button>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  club: state.club.club,
});

export default connect(mapStateToProps, { clubExit })(withRouter(Header_Clubs));
