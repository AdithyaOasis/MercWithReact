import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class Profile extends Component {
  render() {
    if (!this.props.user) {
      return <h1>login first</h1>;
    }
    const { username, id, email } = this.props.user.user;

    return (
      <div>
        <div>
          {this.props.isAuthenticated ? (
            <div id="user-profile">
              <div className="coontainer">
                <h1>Name</h1>
                <ul>
                  <li>email:-{email}</li>
                  <li>username:-{username}</li>
                  <li>id:-{id}</li>
                </ul>
              </div>
            </div>
          ) : (
            <div>NOT_AVAILABLE</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Profile);

//export default Profile;
