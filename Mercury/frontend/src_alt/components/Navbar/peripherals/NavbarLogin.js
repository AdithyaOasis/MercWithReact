import React, { Component } from "react";
import NavbarGeneric from "./NavbarGeneric";

export class NavbarLogin extends Component {
  render() {
    return (
      <div>
        <NavbarGeneric
          link1Name="Back"
          link1="/"
          link2Name="Register"
          link2="/register"
          link3Name=""
          link3="/"
          centralLink="/Login"
          centralLinkName="LOGIN"
        />
      </div>
    );
  }
}

export default NavbarLogin;
