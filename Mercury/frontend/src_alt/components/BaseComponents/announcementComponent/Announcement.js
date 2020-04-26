import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
//import Add from "./peripherals/Add";
export class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: [],
      text: "",
    };
  }

  componentDidMount() {
    //setTimeout(() => {
    //console.log(this.state.club);
    //  if (this.props.club) {
    console.log("Props");
    const body = JSON.stringify({
      send: "get",
      user_id: "",
      content: "",
      group: this.props.groupname,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("./api/announcements", body, config)
      .then((res) => {
        this.setState({ announcement: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Fs in the chat");
      });
    // }, 1000);
  }
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);

    const body = JSON.stringify({
      send: "post",
      user_id: this.props.user.id,
      content: this.state.text,
      group: this.props.groupname,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("./api/announcements", body, config)
      .then((res) => {
        this.setState({ announcement: res.data });
      })
      .catch((err) => {
        console.log("Fs in the chat");
      });
  };

  renderConditional = () => {
    console.log("inside renderconditional");
    if (true) {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} />
          <input type="submit" />
        </form>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Announcements</div>
          <div className="card-body">
            <div className="card-text">
              <div
                style={{
                  overflowY: "auto",
                  maxHeight: "50px",
                  display: "flex",
                  flexDirection: "column-reverse",
                }}
              >
                <ul className="card-text list-group">
                  {this.state.announcement.map((message) => (
                    <li className="list-group-item" key={message.id}>
                      {message.user_from.username} - {message.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            {this.renderConditional()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user.user,
  //club: state.club.club,
});
export default connect(mapStateToProps)(Announcement);
