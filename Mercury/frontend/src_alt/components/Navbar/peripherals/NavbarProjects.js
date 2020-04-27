import React, { Component } from "react";
import NavbarGeneric from "./NavbarGeneric";

export class NavbarProjects extends Component {
  render() {
    return (
      <div>
        <NavbarGeneric
          link1Name="Home"
          link1="/projects"
          link2Name="Desciption"
          link2="/projects/description"
          link3Name="Members"
          link3="/projects/members"
          centralLink="/projects"
          centralLinkName="PROJECT_NAME"
        />
      </div>
    );
  }
}

export default NavbarProjects;
