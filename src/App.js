import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import Header from './layout/Header'

class App extends Component {
  state= {
    todos: [
      {
        id: 1,
        title:"take out the trash",
        completed: false
      },
      {
        id: 2,
        title:"dinner",
        completed: false
      },
      {
        id: 3,
        title:"Meeting with Boss",
        completed: false
      }
    ]
  }

  //toggles state of todo tasks
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  })
    console.log(id)
}

//It deletes the todo Item
delTodo = (id) => {
 this.setState({ todos: [...this.state.todos.filter(todo => 
   todo.id !== id)]})
}


  render() {

    return (
      <div className="App">
        <Header /> 
        <AddTodo /> 
        <Todos 
          do={this.state.todos} 
          markComplete={ this.markComplete } 
          delTodo={this.delTodo}
        />   
        </div>
    );
  }
}


export default App;
