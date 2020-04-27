import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clubEnter } from "../../../actions/clubs";
import { projectEnter } from "../../../actions/projects";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

export class ProjectClubList extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    user: PropTypes.object,
    list: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    clubEnter: PropTypes.func,
  };

  Enter = (id) => {
    //if logged in
    if (this.props.user) {
      //if it is clublist
      if (this.props.type == "clubList") {
        //if user present in the club
        if (this.props.user.clubs.hasOwnProperty(id)) {
          this.props.clubEnter(id);
          setTimeout(this.props.history.push("/clubs/home"), 2000);
        } else {
          console.log("Not a part of the club");
        }
        //if it is project list
      } else if (this.props.type == "projectList") {
        //if user present in the project
        if (this.props.user.projects.hasOwnProperty(id)) {
          this.props.projectEnter(id);
          this.props.history.push("/projects/home");
        } else {
          console.log("Not a part of the project");
        }
      }
    } else {
      console.log("Login first");
      alert("Login First");
    }
  };
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div>
          <h2>list</h2>
          <div>
            <div className="list-group">
              {this.props.list.map((item) => (
                <button
                  key={item.id}
                  className="list-group-item list-group-item-action"
                  onClick={() => this.Enter(item.id)}
                >
                  {this.props.type === "projectList"
                    ? item.project_Name
                    : item.club_name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps, { clubEnter, projectEnter })(
  withRouter(ProjectClubList)
);
