import React, { Component } from "react";
import NavbarGeneric from "./NavbarGeneric";

export class NavbarClubs extends Component {
  render() {
    return (
      <div>
        <NavbarGeneric
          link1Name="Home"
          link1="/clubs/home"
          link2Name="Projects"
          link2="/clubs/projects"
          link3Name="Members"
          link3="/clubs/members"
          centralLink="/clubs"
          centralLinkName="CLUB_NAME"
        />
      </div>
    );
  }
}

export default NavbarClubs;
