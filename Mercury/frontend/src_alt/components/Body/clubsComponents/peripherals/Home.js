import React, { Component, Fragment } from "react";
import Todoapp from "../../../BaseComponents/todoComponent/Todoapp";
import Todo from "../../../BaseComponents/todoComponent/Todo";
import Drive from "../../../BaseComponents/driveComponent/Drive";
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
            <Todo />
            <Drive />
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
