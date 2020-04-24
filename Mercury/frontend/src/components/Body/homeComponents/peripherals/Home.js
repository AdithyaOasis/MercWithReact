import React, { Component, Fragment } from "react";
import Calendar from "../../../BaseComponents/calendarComponent/Calendar";
import Notifications from "../../../BaseComponents/notificationsComponent/Notifications";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home</h1>
        <div className="container">
          <div className="col-sm 6">
            <h1> Events for next 7 days </h1>
            <Notifications />
          </div>
          <hr />
          <div className="col-sm-6">
            <h1>Calendar of important events </h1>
            <Calendar />
          </div>
        </div>
      </Fragment>
    );
  }
}

//
//

export default Home;
