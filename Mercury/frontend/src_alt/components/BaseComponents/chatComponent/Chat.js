import React, { Component } from "react";
import Message from "./peripherals/ChatMessage";
import axios from "axios";
import { connect } from "react-redux";
export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatList: [],
      text: "",
    };
  }

  componentDidMount() {
    //console.log(this.state.club);
    //  if (this.props.club) {
    setTimeout(() => {
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
        .post("./api/chat", body, config)
        .then((res) => {
          this.setState({ chatList: res.data });
          //console.log(res.data);
        })
        .catch((err) => {
          console.log("Fs in the chat");
        });
    }, 1000);
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
      .post("./api/chat", body, config)
      .then((res) => {
        this.setState({ chatList: res.data });
      })
      .catch((err) => {
        console.log("Fs in the chat");
      });
  };
  render() {
    return (
      <div>
        <div className="card  mb-3">
          <div className="card-header">Chats</div>
          <div className="card-body">
            <div
              style={{
                overflowY: "auto",
                height: "250px",
                maxHeight: "250px",
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              <ul className="card-text ">
                {this.state.chatList.map((message) => (
                  <Message text={message.content} key={message.id} />
                ))}
              </ul>
            </div>
            <div>
              <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChange} />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user.user,
});
export default connect(mapStateToProps)(Chat);
