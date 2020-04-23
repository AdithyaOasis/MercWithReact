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

import NavbarComponent from "./Navbar/NavbarComponent";
import BodyComponent from "./Body/BodyComponent.js";

//import "./Styles.css";
const alertOptions = {
  timeout: 3000,
  position: "top center",
};
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div id="navbar"></div>
          <NavbarComponent />
          <div id="body">
            <BodyComponent />
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
