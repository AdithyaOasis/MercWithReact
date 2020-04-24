import React, { Component } from "react";
import NavbarGeneric from "./NavbarGeneric";

export class NavBar404 extends Component {
  render() {
    return (
      <div>
        <NavbarGeneric
          link1Name="BACK TO SAFETY"
          link1="/home"
          link2Name=""
          link2="/clubs/projects"
          link3Name=""
          link3="/clubs/members"
          centralLink="/home"
          centralLinkName="404"
        />
      </div>
    );
  }
}

export default NavBar404;
