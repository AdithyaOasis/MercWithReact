import React, { Component, Fragment } from "react";
import Chat from "../../../BaseComponents/chatComponent/Chat";
import Announement from "../../../BaseComponents/announcementComponent/Announcement";
import Todo from "../../../BaseComponents/todoComponent/Todo";
import Drive from "../../../BaseComponents/driveComponent/Drive";
import { connect } from "react-redux";
import axios from "axios";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: null,
    };
  }

  render() {
    if (!this.props.club) {
      return <h2>Loading</h2>;
    }

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 border border-dark">
              <Announement
                groupname={this.props.club.club.club_name}
                admins={this.props.club.admins}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 border border-dark">
              <Todo />
            </div>
            <div className="col-sm-4">
              <Chat groupname={this.props.club.club.club_name} />
            </div>
            <div className="col-sm-4">
              <Drive />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  club: state.club.club,
});

export default connect(mapStateToProps)(Home);
