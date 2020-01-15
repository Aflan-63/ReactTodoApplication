import React, { Component } from "react";
import Header from "./components/layout/header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Go to the bathroom",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Party all night",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Watch netflix",
        completed: false
      }
    ]
  };

  //Check Compelete
  markComplete = id => {
    //map array
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    //console.log(id);
    //filter array
  };

  //Add to state
  addTodo = title => {
    //console.log(title)
    if (!title.length == 0) {
      const newTodo = {
        id: uuid.v4(),
        title: title,
        completed: false
      };
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
