import React, { Component } from "react";
import { NavbarGeneric } from "./NavbarGeneric";

export class NavbarHome extends Component {
  render() {
    return (
      <div>
        <NavbarGeneric
          link1Name="Home"
          link1="/home"
          link2Name="Clubs"
          link2="/home/clubs"
          link3Name="Profile"
          link3="/home/profile"
          centralLink="/home"
          centralLinkName="MERCURY"
        />
      </div>
    );
  }
}

export default NavbarHome;
