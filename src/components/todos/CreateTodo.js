// ./src/components/todos/CreateTodo.js

import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor(props){
    super(props);
    this.state ={
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event)=>this.handleChange(event)} />
          </p>
          <input type="submit" onSubmit={(event) => this.handleSubmit(event)} />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default CreateTodo;
