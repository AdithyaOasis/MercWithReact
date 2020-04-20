import React, { Component, Fragment } from "react";
import axios from "axios";
export class Clubs extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    axios.get("./api/clubs").then((res) => {
      const list = res.data;
      this.setState({ list });
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <h2>ACTIVE CLUBS:- </h2>
        </div>
        <div>
          <div className="list-group">
            {this.state.list.map((club) => (
              <a
                key={club.id}
                href="#"
                className="list-group-item list-group-item-action"
              >
                {club.club_name}
              </a>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Clubs;
