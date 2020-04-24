import React, { Component } from "react";
import NavbarHome from "./peripherals/NavbarHome";
import NavbarClubs from "./peripherals/NavbarClubs";
import NavbarLogin from "./peripherals/NavbarLogin";
import NavbarProjects from "./peripherals/NavbarProjects";
import Error from "../BaseComponents/errorComponent/Error";
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
          <h1>NavbarComponent</h1>

          <NavbarGeneric />

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

            <Route exact path="/Projects" component={NavbarProjects} />
            <Route exact path="/Projects/Home" component={NavbarProjects} />
            <Route
              exact
              path="/Projects/Description"
              component={NavbarProjects}
            />
            <Route exact path="/Projects/Members" component={NavbarProjects} />

            <Route exact path="/Login" component={NavbarLogin} />
            <Route exact path="/Register" component={NavbarLogin} />

            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavbarComponent;
