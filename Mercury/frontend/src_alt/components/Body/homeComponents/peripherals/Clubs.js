import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import { clubEnter } from "../../../actions/clubs";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
export class Clubs extends Component {
  /* state = {
    list: [],
  };

  static propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    clubEnter: PropTypes.func,
  };

  componentDidMount() {
    axios.get("./api/clubs").then((res) => {
      const list = res.data;
      this.setState({ list });
    });
  }
  enter = (id) => {
    if (this.props.isAuthenticated) {
      if (this.props.user.clubs.hasOwnProperty(id)) {
        if (this.props.clubEnter(id)) {
          this.props.history.push("/club");
        }
      } else {
        console.log("Not a part of the club");
      }
    } else {
      console.log("Login first");
      alert("Login First");
    }
  };*/
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <h2>ACTIVE CLUBS:- </h2>
          </div>
          <div>
            <div className="list-group">Here</div>
          </div>
        </Fragment>
      </Router>
    );
  }
}
/*{this.state.list.map((club) => (
                <button
                  key={club.id}
                  className="list-group-item list-group-item-action"
                  onClick={() => this.enter(club.id)}
                >
                  {club.club_name}
                </button>
              ))}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { clubEnter })(withRouter(Clubs));
*/
export default Clubs;
