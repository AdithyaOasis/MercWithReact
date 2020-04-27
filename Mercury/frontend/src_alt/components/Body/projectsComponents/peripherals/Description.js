import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
export class Description extends Component {
  render() {
    if (!this.props.project) return <h1>Loading ..</h1>;
    return (
      <div>
        <div className="container">
          <h1>About Project</h1>
          <p>{this.props.project.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps)(Description);
