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

import H_Home from "./pages/Home/Home";
import H_Clubs from "./pages/Home/Clubs";
import H_Profile from "./pages/Home/Profile";
import C_Home from "./pages/Clubs/Home";
import C_Projects from "./pages/Clubs/Projects";
import C_Members from "./pages/Clubs/Members";
import P_Home from "./pages/Projects/Home";
import P_Desc from "./pages/Projects/Description";
import P_Members from "./pages/Projects/Members";
import Header from "./layout/Header_Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

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
              <Route exact path="/" component={H_Home} />
              <Route exact path="/Home/clubs" component={H_Clubs} />
              <Route exact path="/Home/Profile" component={H_Profile} />
              <Route exact path="/club" component={C_Home} />
              <Route exact path="/club/Projects" component={C_Projects} />
              <Route exact path="/club/Members" component={C_Members} />
              <Route exact path="/project" component={P_Home} />
              <Route exact path="/project/desc" component={P_Desc} />
              <Route exact path="/project/members" component={P_Members} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
            what about now?
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
