import React, { Component, Fragment } from "react";
import axios from "axios";
import ClubList from "../../../BaseComponents/projectClubListComponent/ProjectClubList";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Clubs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      recieved: false,
    };
  }
  static propTypes = {
    user: PropTypes.object,
  };

  componentDidMount() {
    //Gets details of all the clubs
    //given as props with list from home/clubs
    axios.get("/api/clubs").then((res) => {
      const list = res.data;
      this.setState({ list });
      this.setState({ recieved: true });
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <h2>ACTIVE CLUBS:- </h2>
        </div>
        <div>
          <ClubList
            type="clubList"
            list={this.state.list}
            user={this.props.user}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Clubs);
