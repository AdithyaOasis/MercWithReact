import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Members extends Component {
  /* state = {
   // members: [],
  //};

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
      })
      .catch((err) => {
        console.log("Promise failed!!", err);
      });
  }
*/
  render() {
    return (
      <div className="list-group">
        <div className="list-group-item list-group-item-action">Here</div>
      </div>
    );
  }
}
/*{this.state.members.map((member) => (
            <div key={member.id.toString()}>
              Member : {member.member.username} <br />
              email: {member.member.email} <br />
              Positon: {member.member_Type} <br />
              Date Joined: {member.Date_Joined} <br />
            </div>
          ))}
          */

/*const mapStateToProps = (state) => ({
  club_name: state.club.club.club_name,
});*/

//export default connect(mapStateToProps)(Members);
export default Members;
