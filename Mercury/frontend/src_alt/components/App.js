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



export class App extends Component {
  render() {
    return (
      //<Provider store={store}>
        <Router>
          <Fragment>
            
            <NavbarComponent />
            <BodyComponent />
            
            {/* <Switch>
              <Route exact path="/" component={H_Home} />
              <Route exact path="/Home" component={H_Home} />
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
            </Switch> */}
          </Fragment>
        </Router>
      //</Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
