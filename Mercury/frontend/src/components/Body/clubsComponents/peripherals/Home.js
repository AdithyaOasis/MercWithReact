import React, { Component, Fragment } from "react";
import Todoapp from "../../../BaseComponents/todoComponent/Todoapp";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    if (!this.props.club) {
      return <h2>Loading..</h2>;
    }
    return (
      <Fragment>
        <div className="container">
          <h1>Home</h1>
          <div className="row">
            <div className="col-sm-4 border border-dark">
              <Todoapp />
            </div>
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
