import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Club from "./clubsComponets/Club";
import Home from "./homeComponents/Home";
//import Login from "./loginComponents/Login";
import Project from "./projectsComponents/Project";
//import Register from "./registerComponents/Register";
import Error from "../BaseComponent/error/Error";

export class Body extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Project" component={Project} />
            <Route path="/Club" component={Club} />

            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Body;
