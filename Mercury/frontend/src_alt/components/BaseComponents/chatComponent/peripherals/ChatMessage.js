import React, { Component } from "react";

export class ChatMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li className="list-group-item" key={this.props.ket}>
          {this.props.text}
        </li>
      </div>
    );
  }
}

export default ChatMessage;
