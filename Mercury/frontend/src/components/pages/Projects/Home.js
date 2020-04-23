import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Projects</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps)(Home);
