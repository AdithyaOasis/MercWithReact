import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Navbar</h1>
        </div>
      </Router>
    );
  }
}

export default Navbar;
