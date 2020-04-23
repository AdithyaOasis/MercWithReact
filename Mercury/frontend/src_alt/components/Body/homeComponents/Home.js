import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Homepage from "./peripherals/Home";
import Clubs from "./peripherals/Clubs";
import Profile from "./peripherals/Profile";
import Error from "../../BaseComponent/error/Error";
export class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          Home
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Home" component={Homepage} />
            <Route exact path="/Home/Home" component={Homepage} />
            <Route exact path="/Home/Clubs" component={Clubs} />
            <Route exact path="/Home/Profile" component={Profile} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
