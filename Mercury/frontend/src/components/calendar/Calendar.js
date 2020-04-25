import React, { Component } from "react";
import Calendar from "react-calendar";
//import axios from "axios";
import "react-calendar/dist/Calendar.css";

export default class MyApp extends Component {
  state = {
    date: new Date(),
    //events: [],
  };

  // componentDidMount() {
  //   axios.get("./api/events").then((res) => {
  //     const events = res.data;
  //     this.setState({ events });
  //   });
  // }

  onChange = (date) => this.setState({ date });

  // getDate(date_time){
  //   this.state.events.map((event) => ())
  // }
  
  render() {
    const tileContent = ({ date, view }) => view === "month" && ((date.getDate() === 21 && date.getMonth() === 3) || (date.getDate() === 22 && date.getMonth() === 3)) ? <p>Holiday!</p> : null
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          tileContent={tileContent}
        />
      </div>
    );
  }
}
