import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      name: "No Name",
      number: "No Number",
      agen: "No age",
      dob: "No dob",
      gender: "None",
      bio: "No bio",
      change: "false",
    };
  }

  onChange = (e) => ({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    // const { name, number, agen, dob, gender, bio } = this.state;
    // body = JSON.stringify({ name, number, agen, dob, gender, bio });
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // axios
    // .post("./api/profile",body,config)
    // .then((res) => {
    //   const name = res.data.name
    //   const agen = res.data.agen
    //   const bio = res.data.bio
    //   const gender = res.data.gender
    //   const number = res.data.number
    //   const dob = res.data.dob
    //   this.setState({name, agen, bio, gender, number, dob})
    // })
    console.log(this.state.email);
    console.log("Submitted");
  };

  change = (e) => {
    e.preventDefault();
    this.setState({ change: this.state.change ? false : true });
    console.log(this.state.change);
    e.value = "Submit";
  };

  // componentDidMount() {
  //   body = JSON.stringify({ id: this.props.user.user.id });
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   axios
  //   .post("./api/profile",body,config)
  //   .then((res) => {
  //     const name = res.data["name"]
  //     const agen = res.data.["agen"]
  //     const bio = res.data.["bio"]
  //     const gender = res.data.["gender"]
  //     const number = res.data.["number"]
  //     const dob = res.data.["dob"]
  //     this.setState({name, agen, bio, gender, number, dob})
  //   })
  // }

  render() {
    if (!this.props.user) {
      return <h1>login first</h1>;
    }
    const { username, id, email } = this.props.user.user;

    return (
      <div>
        {this.props.isAuthenticated ? (
          <div id="user-profile">
            <div className="container border">
              <h1>Profile</h1>
              {/*<ul>
                <li>email:-{email}</li>
                <li>username:-{username}</li>
                <li>id:-{id}</li>
              </ul> */}
              <form onSubmit={this.onSubmit}>
                <fieldset>
                  <div className="form-group">
                    <label>username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder={(this.props.user.user, username)}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder={this.props.user.user.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Bio</label>
                    <input
                      type="text"
                      name="bio"
                      className="form-control"
                      placeholder={this.state.bio}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Number</label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      placeholder={this.state.number}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      className="form-control"
                      name="gender"
                      onChange={this.onChange}
                    >
                      <option>Male</option>
                      <option>Nope</option>
                    </select>
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-primary"
                  // onClick={this.change}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div>NOT_AVAILABLE</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Profile);
