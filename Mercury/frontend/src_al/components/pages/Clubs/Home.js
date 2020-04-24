import React, { Component, Fragment } from "react";
import Todoapp from "../../todo/Todoapp";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    if (!this.props.club) {
      return <h2>Loading..</h2>;
    }
    return (
      <Fragment>
        <div className="container">
          <h1></h1>
          <div className="row">
            <div className="col-sm-4 border border-dark"></div>
            <Todoapp />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  club: state.club.club,
});

export default connect(mapStateToProps)(Home);
//export default Home;
