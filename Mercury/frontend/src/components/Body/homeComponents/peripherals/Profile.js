import React, { Component, Fragment } from "react";
//import { connect } from "react-redux";
import ProfileComp from "../../../BaseComponents/profileComponent/Profile";
export class Profile extends Component {
  render() {
    return (
      <div>
        Profile
        <div>
          <ProfileComp />
        </div>
      </div>
    );
  }
}

export default Profile;
