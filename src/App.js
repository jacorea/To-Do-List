import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import About from "./components/pages/About"
import Header from './layout/Header'

//used to generate a random id
import uuid from 'uuid'

class App extends Component {
  state= {
    todos: [
      {
        id: uuid.v4(),
        title:"take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title:"dinner",
        completed: false
      },
      {
        id: uuid.v4(),
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

//Adds a task to the Todo List
addTodo = (title) => {
  //creating a newTodo variable 
  //using spread operator to copy state while updating it with new todo task
  const newTodo = {
    id: uuid.v4(),
    //ES6 can have one if key:value are the same
    title,
    completed: false,
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}


  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header /> 
            
            <Route exact path ="/" render={props => (
              <React.Fragment>
                <Todos 
                  do={this.state.todos} 
                  markComplete={ this.markComplete } 
                  delTodo={this.delTodo}
                />   
                <br />
                <AddTodo addTodo={this.addTodo} /> 
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
