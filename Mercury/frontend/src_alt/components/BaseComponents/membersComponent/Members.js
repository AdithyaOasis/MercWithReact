import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MapList from "./peripherals/MapList";
export class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subadmin: [],
      admin: [],
      member: [],
      supervisor: [],
    };
    if (this.props.type === "club") {
      this.props.list.forEach((member) => {
        if (member.member_Type === "admin") this.state.admin.push(member);
        else if (member.member_Type === "subadmin")
          this.state.subadmin.push(member);
        else if (member.member_Type === "member")
          this.state.member.push(member);
      });
      //console.log(this.state.admin[0].member.username);
    } else if (this.props.type === "project") {
      console.log(this.props.list);
      this.props.list.forEach((member) => {
        if (member.member_Type === "supervisor")
          this.state.supervisor.push(member);
        else if (member.member_Type === "member")
          this.state.member.push(member);
      });
    }
  }

  renderConditional = () => {
    console.log("inside renderconditional");
    if (this.props.type === "club") {
      return (
        <div>
          <MapList type="admin" list={this.state.admin} />
          <MapList type="subadmin" list={this.state.subadmin} />
          <MapList type="member" list={this.state.member} />
          {console.log("club")}
        </div>
      );
    } else if (this.props.type === "project") {
      console.log("If project");
      return (
        <div>
          <MapList type="supervisor" list={this.state.supervisor} />
          <MapList type="member" list={this.state.member} />
        </div>
      );
    }
  };

  render() {
    console.log("loaded");
    return <div>{this.renderConditional()}</div>;
  }
}

export default Members;
