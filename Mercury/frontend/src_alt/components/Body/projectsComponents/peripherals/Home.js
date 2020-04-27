import React, { Component, Fragment } from "react";
import Chat from "../../../BaseComponents/chatComponent/Chat";
import Announement from "../../../BaseComponents/announcementComponent/Announcement";
import Todo from "../../../BaseComponents/todoComponent/Todo";
import Drive from "../../../BaseComponents/driveComponent/Drive";
import { connect } from "react-redux";
export class Home extends Component {
  
  
  render() {

    if (!this.props.project){
      return(
        <h1>Loading...</h1>
      )
    }

    return (
      <div>
          <div className="row">
            <div className="col-sm-4">
              <Chat groupname={this.props.project.project_Name} />
            </div>
            <div className="col-sm-4 border border-dark">
              <Todo />
            </div>
            <div className="col-sm-4">
              <Drive />
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps)(Home);