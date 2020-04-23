import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./peripherals/Home";
import Members from "./peripherals/Members";
import Projects from "./peripherals/Projects";
import Error from "../../BaseComponent/error/Error";
export class Club extends Component {
  render() {
    return (
      <Router>
        <div>
          Club
          <Switch>
            <Route exact path="/club/Home" component={Home} />
            <Route exact path="/club/Projects" component={Projects} />
            <Route exact path="/club/Members" component={Members} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Club;
