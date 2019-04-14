import React, { Component } from 'react';
import TodoItem from './TodoItem'
import Proptypes from 'prop-types'

class Todos extends Component {
  render() {
      console.log(this.props.do)
    return this.props.do.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
    ))
  }
}

//PropTypes
Todos.propTypes = {
    do: Proptypes.array.isRequired
}

export default Todos;
