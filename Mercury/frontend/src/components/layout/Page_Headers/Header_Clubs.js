import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clubExit } from "../../../actions/clubs";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
export class Header_Clubs extends Component {
  back = () => {
    this.props.clubExit();
    this.props.history.push("/");
  };
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">Mercury</a>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/club">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/club/Projects">
                      Projects
                    </Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link" to="/club/Members">
                      Members
                    </Link>
                  </li>
              </ul>
          </div>
          <div class="mx-auto order-0">
    <a class="navbar-brand mx-auto" href="#">{this.props.club_name}</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="#">Right</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                  </li>
              </ul>
          </div>
      </nav>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({club_name : state.club.inClub});

export default connect(mapStateToProps, { clubExit })(withRouter(Header_Clubs));
