import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MemList from "../../../BaseComponents/membersComponent/Members";
export class Members extends Component {
  state = {
    members: [],
  };
  componentDidMount() {
    const body = JSON.stringify({ club_name: this.props.club_name });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("Making the request");
    axios
      .post("./api/clubs/members/member", body, config)
      .then((res) => {
        const members = res.data;
        this.setState({ members });
        //console.log(this.state.members);
      })
      .catch((err) => {
        console.log("Promise failed!!", err);
      });
  }
  render() {
    if (this.state.members.length === 0) return <h1>Not yet</h1>;
    return (
      <div>
        <MemList type="club" list={this.state.members} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  club_name: state.club.club.club.club_name,
});

export default connect(mapStateToProps)(Members);
