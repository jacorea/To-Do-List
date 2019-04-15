import React, { Component } from 'react';
import TodoItem from './TodoItem'
import Proptypes from 'prop-types'

class Todos extends Component {
  render() {
    return this.props.do.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ))
  }
}

//PropTypes
Todos.propTypes = {
    do: Proptypes.array.isRequired
}

export default Todos;
