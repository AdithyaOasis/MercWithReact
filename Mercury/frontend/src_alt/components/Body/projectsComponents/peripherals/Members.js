import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import MemList from "../../../BaseComponents/membersComponent/Members";
export class Members extends Component {
  state = {
    members: [],
  };

  componentDidMount() {
    const body = JSON.stringify({ id: this.props.id });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("Making the request");
    axios
      .post("./api/projects/members", body, config)
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

    console.log(this.state.members);
    return (
      <div>
        <h1>Projects/Members</h1>
        <div>
          <MemList type="project" list={this.state.members} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.project.project.id,
});

export default connect(mapStateToProps)(Members);
