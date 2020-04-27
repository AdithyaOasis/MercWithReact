import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

export class Todo extends Component {
  state = {
    tasks: [],
    task_content: "",
  };

  componentDidMount() {
    setTimeout(() => {
      console.log(this.props.group);
      const body = JSON.stringify({
        send: "get",
        user_created_by_id: "1",
        user_assigned_to_id: "2",
        delete_id: "11",
        task_content: "task1 in club1 form varun -> varun487",
        group: this.props.group,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("Making the request for todo tasks");
      axios
        .post("./api/todo", body, config)
        .then((res) => {
          const tasks = res.data;
          console.log(tasks);
          this.setState({ tasks });
        })
        .catch((err) => {
          console.log("Promise failed!!", err);
        });
    }, 1000);
  }

  deleteTask = (id) => {
    setTimeout(() => {
      console.log("deleting task with id", id);
      const body = JSON.stringify({
        send: "delete",
        user_created_by_id: "2",
        user_assigned_to_id: "1",
        delete_id: id,
        task_content: "task2 in club2 form varun487 -> varun",
        group: this.props.group,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("Making the request for todo tasks");
      axios
        .post("./api/todo", body, config)
        .then((res) => {
          const tasks = res.data;
          console.log(tasks);
          this.setState({ tasks });
        })
        .catch((err) => {
          console.log("Promise failed!!", err);
        });
    }, 1000);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.task_content);
    console.log(this.props.user_id);
    console.log(this.props.group);
    const body = JSON.stringify({
      send: "post",
      user_created_by_id: this.props.user_id,
      user_assigned_to_id: "1",
      delete_id: "1",
      task_content: this.state.task_content,
      group: this.props.group,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log("Posting to todo tasks");

    axios
      .post("./api/todo", body, config)
      .then((res) => {
        const tasks = res.data;
        console.log(tasks);
        this.setState({ tasks });
      })
      .catch((err) => {
        console.log("Promise failed!!", err);
      });
  };

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <div>
          {console.log("length of links", this.state.tasks.length)}
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              task content: {task.task_content} <br />
              task date: {task.date_time_created} <br />
              task created by: {task.created_by.username} <br />
              <button
                onClick={() => {
                  this.deleteTask(task.id);
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
                name="task_content"
                onChange={this.onChange}
                value={this.state.task_content}
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
  group: state.project.inProject
    ? state.project.project.project_Name
    : state.club.club.club.club_name,
});

export default connect(mapStateToProps)(Todo);
