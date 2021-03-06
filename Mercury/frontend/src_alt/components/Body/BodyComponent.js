import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Club from "./clubsComponents/Club";
import Home from "./homeComponents/Home";
import Login from "./loginComponents/Login";
import Project from "./projectsComponents/Project";
import Register from "./registerComponents/Register";
import Error from "../BaseComponents/errorComponent/Error";

export class BodyComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/projects" component={Project} />
            <Route path="/Clubs" component={Club} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BodyComponent;
