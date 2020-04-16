import React, { Component } from "react";
import ReactDOM from "react-dom";

export class App extends Component {
  render() {
    return <div>hello is it working?</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
