import React, { Component } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

export default class Notifications extends Component {
  state = {
    events: [],
  };
  componentDidMount() {
    axios.get("./api/events").then((res) => {
      const events = res.data;
      this.setState({ events });
    });
  }

  getDate(date_time) {
    let new_date = "";
    for (var i = 2; i >= 0; i--) {
      new_date += date_time.split("T")[0].split("-")[i] + " ";
    }
    return new_date;
  }

  render() {
    return (
      <div>
        <div className="list-group">
          {this.state.events.map((event) => (
            <div key={event.id.toString()}>
              Event : {event.name} <br />
		  Date: {this.getDate(event.date_time)} <br />
              Description: {event.description}
              <a
                key={event.id.toString()}
                className="list-group-item list-group-item-action"
                href={event.link}
              >
                Link to {event.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
