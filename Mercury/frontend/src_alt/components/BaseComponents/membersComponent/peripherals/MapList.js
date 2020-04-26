import React, { Component } from "react";
import PropTypes from "prop-types";

export class MapList extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    list: PropTypes.array,
    type: PropTypes.string,
  };
  render() {
    return (
      <div>
        <div className="list-group">
          {this.props.type}
          {this.props.list.map((member) => (
            <div
              key={member.id.toString()}
              className="list-group-item
              list-group-item-action"
            >
              Members : {member.member.username} <br />
              email: {member.member.email} <br />
              Positon: {member.member_Type} <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MapList;
