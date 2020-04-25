import React, { Component, Fragment } from "react";
//import Calendar from "../../calendar/Calendar";
//import Notifications from "../../notifications/Notifications";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home</h1>
        <div className="container">
          <div className="col-sm 6">
            <h1> Events for next 7 days </h1>
            Notifications here
          </div>
          <hr />
          <div className="col-sm-6">
            <h1>Calendar of important events </h1>
            Calender Here
          </div>
        </div>
      </Fragment>
    );
  }
}

// <Notifications />
// <Calendar />

export default Home;
