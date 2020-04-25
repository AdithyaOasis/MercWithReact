import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MemList from "../../../BaseComponents/membersComponent/Members";
export class Members extends Component {
  render() {
    return (
      <div>
        <MemList />
      </div>
    );
  }
}

export default Members;
