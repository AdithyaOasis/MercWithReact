import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Projectss</h1>
      </div>
    );
  }
}

//const mapStateToProps = (state) => ({
//  project: state.project.project,
//});

//export default connect(mapStateToProps)(Home);
export default Home;
