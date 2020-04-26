import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

export class Drive extends Component {
  state = {
	links: [],
	link_name: "",
	link: "",
	link_type: ""
  };

  componentDidMount() {
	setTimeout(() => {
	console.log(this.props.group)
    const body = JSON.stringify({
      send: "get",
      link_type: "file",
      link: "https://www.google.com/",
      link_name: "club1 link2 varun",
      user_id: "1",
      delete_id: "1",
      group: this.props.group,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("Making the request for drive links");
    axios
      .post("./api/drive", body, config)
      .then((res) => {
        const links = res.data;
        console.log(links);
        this.setState({ links });
      })
      .catch((err) => {
        console.log("Promise failed!!", err);
	  });
	}, 1000)
  }

  deleteLink = (id) => {
    console.log("deleting link with id", id);
    const body = JSON.stringify({
      send: "delete",
      link_type: "file",
      link: "https://www.google.com/",
      link_name: "club1 link2 varun",
      user_id: "1",
      delete_id: id,
      group: "club1",
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("Making the request for drive links");
    axios
      .post("./api/drive", body, config)
      .then((res) => {
        const links = res.data;
        console.log(links);
        this.setState({ links });
      })
      .catch((err) => {
        console.log("Promise failed!!", err);
      });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
	e.preventDefault();
	console.log(this.state.link);
	console.log(this.state.link_name);
	console.log(this.state.link_type);
	console.log(this.props.user_id);
	console.log(this.props.group);
	const body = JSON.stringify({
		send: "post",
		link_type: this.state.link_type,
		link: this.state.link,
		link_name: this.state.link_name,
		user_id: this.props.user_id,
		delete_id: "2",
		group: this.props.group,
	  });
	  const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  console.log("Posting to drive links");
	  axios
		.post("./api/drive", body, config)
		.then((res) => {
		  const links = res.data;
		  console.log(links);
		  this.setState({ links });
		})
		.catch((err) => {
		  console.log("Promise failed!!", err);
		});
  }

  render() {

    return (
      <div>
        <h1>Drive</h1>
        <div>
          {console.log("length of links", this.state.links.length)}
          {this.state.links.map((link) => (
            <li key={link.id}>
              <a href={link.link} target="_blank">
                <i className="fas fa-file"></i>
                {link.link_name}
              </a>
              <br />
              link type: {link.link_type} <br />
              date created: {link.date_created} <br />
              created by: {link.created_by.username} <br />
              <button
                onClick={() => {
                  this.deleteLink(link.id);
                }}
              >
                Remove
              </button>
            </li>
          ))}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>link name</label>
              <input
                type="text"
                className="form-control"
                name="link_name"
                onChange={this.onChange}
                value={this.state.link_name}
              />
            </div>
            <div className="form-group">
              <label>link</label>
              <input
                type="text"
                className="form-control"
                name="link"
                onChange={this.onChange}
                value={this.state.link}
              />
			</div>
			<div className="form-group">
              <label>link type</label>
              <input
                type="text"
                className="form-control"
                name="link_type"
                onChange={this.onChange}
                value={this.state.link_type}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user_id: state.auth.user.user.id,
  group: state.project.inProject ? state.project.project.project_Name : state.club.club.club_name 
});

export default connect(mapStateToProps)(Drive);
