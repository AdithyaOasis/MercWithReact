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
import Error from "../../BaseComponents/errorComponent/Error";
export class Club extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/clubs" component={Home} />
            <Route exact path="/clubs/Home" component={Home} />
            <Route exact path="/clubs/Projects" component={Projects} />
            <Route exact path="/clubs/Members" component={Members} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Club;
