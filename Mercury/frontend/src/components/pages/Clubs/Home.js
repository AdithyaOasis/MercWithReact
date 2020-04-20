import React, { Component, Fragment } from "react";
import Todoapp from "../../todo/Todoapp";
export class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Clubs</h1>
        <div className="container">
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

export default Home;
