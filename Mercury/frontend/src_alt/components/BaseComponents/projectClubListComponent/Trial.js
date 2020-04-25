import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clubEnter } from "../../../actions/clubs";
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
    this.state = {
      list: [],
      type: this.props.type,
      list: this.props.list,
    };
  }

  static propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    clubEnter: PropTypes.func,
    list: PropTypes.list,

  };
  componentDidMount() {
    //Gets details of all the clubs
    //given as props with list from home/clubs
  /*  axios.get("./api/clubs").then((res) => {
      const list = res.data;
      this.setState({ list });
    });
  }*/
  enterClub = (id) => {
    if (this.props.isAuthenticated) {
      if (this.props.user.clubs.hasOwnProperty(id)) {
        if (this.props.clubEnter(id)) {
          this.props.history.push("/clubs/home");
        }
      } else {
        console.log("Not a part of the club");
      }
    } else {
      console.log("Login first");
      alert("Login First");
    }
  };
  enterProject = (id) => {
    this.props.projectEnter(id);
    this.props.history.push("/projects/home");
  };
  render() {
    if(project){
      return(
        <Router>
        <Fragment>
          <h2>Projects:-</h2>
          <div>
            <div className="list-group">
              {this.state.list.map((item) => (
                <button
                  key={item.id}
                  className="list-group-item list-group-item-action"
                  onClick={() => this.Enter(item.id)}
                >
                  {item.project_Name}
                </button>
              ))}
            </div>
          </div>
        </Fragment>
      </Router>
      )
    }
    else return (
      <div>
        <div>
          <div className="list-group">
            {this.state.list.map((item) => (
              <button
                key={item.id}
                className="list-group-item list-group-item-action"
                onClick={() => this.enterClub(item.id)}
                {/*what will render  */}
              >
                {club.club_name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps, { clubEnter })(
  withRouter(ProjectClubList)
);
