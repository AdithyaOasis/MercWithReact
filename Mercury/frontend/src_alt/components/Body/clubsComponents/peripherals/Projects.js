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
    projects: [],
  };
  Enter = (Project) => {
    this.props.projectEnter(Project);
    this.props.history.push("/projects/home");
  };

  componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ id: this.props.club.id });
    axios.post("./api/projects/project", body, config).then((res) => {
      const projects = res.data;
      this.setState({ projects });
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
              {this.state.projects.map((project) => (
                <button
                  key={project.id}
                  className="list-group-item list-group-item-action"
                  onClick={() => this.Enter(project)}
                >
                  {project.project_Name}
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
