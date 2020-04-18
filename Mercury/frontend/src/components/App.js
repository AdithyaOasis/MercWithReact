import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store.js";
import AlertTemplate from "react-alert-template-basic";

import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import Projects from "./pages/Projects";
import Header from "./layout/Header_Home";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/clubs" component={Clubs} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
            what about now?
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
