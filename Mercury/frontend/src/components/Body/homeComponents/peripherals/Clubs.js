import React, { Component, Fragment } from "react";

import ClubList from "../../../BaseComponents/projectClubListComponent/ProjectClubList";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
export class Clubs extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <h2>ACTIVE CLUBS:- </h2>
          </div>
          <div>
            <ClubList />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Clubs;
