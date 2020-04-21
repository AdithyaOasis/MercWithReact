import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Members extends Component {
  //this.props.club.club_name

  state = {
    club_name: "club2",
    members: [],
  };

  componentDidMount() {
    const body = JSON.stringify({ club_name: this.state.club_name });
    const config = {
      
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("Making the request");
    axios.post("./api/clubs/members/member", body, config).then((res) => {
      const members = res.data;
      console.log(members);
      this.setState({ members });
    }).catch((err) => {console.log("Promise failed!!", err)});
  }

  render() {
    return (
        <div className="list-group">
          <div className="list-group-item list-group-item-action">
            {this.state.members.map((member) => (
              <div key={member.id.toString()}>
                Member : {member.username} <br />
                email: {member.email}
              </div>
            ))}
          </div>
        </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   club: state.club.club
// })

export default Members;
