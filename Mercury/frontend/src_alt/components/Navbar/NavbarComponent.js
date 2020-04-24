import React, { Component } from "react";
import NavbarHome from "./peripherals/NavbarHome";
import NavbarClubs from "./peripherals/NavbarClubs";
import NavbarLogin from "./peripherals/NavbarLogin";
import NavbarProjects from "./peripherals/NavbarProjects";
import NavBar404 from "./peripherals/NavBar404";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavbarGeneric from "./peripherals/NavbarGeneric";

export class NavbarComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={NavbarHome} />
            <Route exact path="/Home" component={NavbarHome} />
            <Route exact path="/Home/Home" component={NavbarHome} />
            <Route exact path="/Home/Clubs" component={NavbarHome} />
            <Route exact path="/Home/Profile" component={NavbarHome} />

            <Route exact path="/Clubs" component={NavbarClubs} />
            <Route exact path="/Clubs/Home" component={NavbarClubs} />
            <Route exact path="/Clubs/Projects" component={NavbarClubs} />
            <Route exact path="/Clubs/Members" component={NavbarClubs} />

            <Route exact path="/Project" component={NavbarProjects} />
            <Route exact path="/Project/Home" component={NavbarProjects} />
            <Route
              exact
              path="/Project/Description"
              component={NavbarProjects}
            />
            <Route exact path="/Project/Members" component={NavbarProjects} />

            <Route exact path="/Login" component={NavbarLogin} />
            <Route exact path="/Register" component={NavbarLogin} />

            <Route component={NavBar404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavbarComponent;
