import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
export class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    axios.get("./api/projects").then((res) => {
      const projects = res.data;
      this.setState({ projects });
    });
  }

  render() {
    return (
      <Fragment>
        <h2>Projects:-</h2>
        <div>
          <div className="list-group">
            {this.state.projects.map((project) => (
              <a
                key={project.id}
                href="/#/project"
                className="list-group-item list-group-item-action"
              >
                {project.project_Name}
              </a>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
