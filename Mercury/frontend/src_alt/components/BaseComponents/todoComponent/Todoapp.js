import React, { Component } from "react";
import Todos from "./peripherals/Todos";
import AddTodo from "./peripherals/AddTodo.js";

class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, content: "club project 1" },
      { id: 2, content: "club project 2" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoApp;
