import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos"

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
        completed: true
      },
      {
        id: 3,
        title:"Meeting with Boss",
        completed: false
      }
    ]
  }




  render() {

    return (
      <div className="App">
        <h1>App</h1>   
        <Todos do={this.state.todos} />   
        </div>
    );
  }
}

export default App;
