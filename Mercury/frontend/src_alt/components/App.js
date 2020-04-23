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

import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";

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
          <div id="navbar">
            <Navbar />
          </div>

          <div id="body">
            <Body />
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
