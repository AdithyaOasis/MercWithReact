import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { projectEnter } from "../../../../actions/projects";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
export class Projects extends Component {
  state = {
    list: [],
  };
  Enter = (id) => {
    this.props.projectEnter(id);
    this.props.history.push("/projects/home");
  };

  componentDidMount() {
    //gets the list of all the project in the club
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ id: this.props.club.id });
    axios.post("./api/projects/project", body, config).then((res) => {
      const list = res.data;
      this.setState({ list });
    });
  }

  render() {
    if (!this.props.club) {
      return <h1>Not in club</h1>;
    }
    return (
      <Router>
        <Fragment>
          <h2>Projects:-</h2>
          <div>
            <div className="list-group">
              {this.state.list.map((item) => (
                <button
                  key={item.id}
                  className="list-group-item list-group-item-action"
                  onClick={() => this.Enter(item.id)}
                >
                  {item.project_Name}
                </button>
              ))}
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  club: state.club.club,
});

export default connect(mapStateToProps, { projectEnter })(withRouter(Projects));
//export default Projects;
