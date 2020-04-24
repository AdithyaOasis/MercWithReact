import React, { Component } from "react";
import NavbarGeneric from "./NavbarGeneric";

export class NavbarProjects extends Component {
  render() {
    return (
      <div>
        <NavbarGeneric
          link1Name="Home"
          link1="/project"
          link2Name="Desciption"
          link2="/project/description"
          link3Name="Members"
          link3="/project/members"
          centralLink="/project"
          centralLinkName="PROJECT_NAME"
        />
      </div>
    );
  }
}

export default NavbarProjects;
