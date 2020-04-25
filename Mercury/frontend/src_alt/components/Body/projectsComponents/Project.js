import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./peripherals/Home";
import Members from "./peripherals/Members";
import Desc from "./peripherals/Description";
import Error from "../../BaseComponent/error/Error";

export class Projects extends Component {
  render() {
    return (
      <Router>
        <div>Project</div>
        <Switch>
          <Route exact path="/projects/Home" component={Home} />
          <Route exact path="/projects/Members" component={Members} />
          <Route exact path="/projects/Description" component={Desc} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default Projects;
