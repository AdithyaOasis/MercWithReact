import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProjectList from "../../../BaseComponents/projectClubListComponent/ProjectClubList";

export class Projects extends Component {
  state = {
    list: [],
  };
  static propTypes = {
    club: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentDidMount() {
    //gets the list of all the project in the club
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ id: this.props.club.id });
    axios.post("./api/projects/project", body, config).then((res) => {
      const list = res.data;
      this.setState({ list });
    });
  }

  render() {
    console.log(this.state.list);
    if (!this.props.club) {
      return <h1>Not in club</h1>;
    }
    return (
      <Fragment>
        <h2>Projects:-</h2>
        <div>
          <ProjectList
            type="projectList"
            list={this.state.list}
            user={this.props.user}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  club: state.club.club.club,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Projects);
