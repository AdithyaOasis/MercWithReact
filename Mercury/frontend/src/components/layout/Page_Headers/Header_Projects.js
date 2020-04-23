import React, { Component } from "react";
import { Link } from "react-router-dom";
import { projectExit } from "../../../actions/projects";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
export class Header_Projects extends Component {
  back = () => {
    this.props.projectExit();
    this.props.history.push("/club");
  };
  render() {
    if (!this.props.project) {
      return <Fragment></Fragment>;
    }
    return (
      <div>
        <div>
          <h1>{this.props.project.project_Name}</h1>
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
          <button className="btn btn-primary" onClick={this.back}>
            Club
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, { projectExit })(
  withRouter(Header_Projects)
);
