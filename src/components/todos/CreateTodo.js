import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    content: ""
  }
  
  handleChange = (event) => {
    this.setState({content: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_TODO', todo: this.state})
    this.setState({content: ""})
  }
  
  render() {
    console.log(this.props.store.getState().todos);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.content}/>
          </p>
          <input type="submit" />
        </form>
        <div>{this.props.store.getState().todos.map((x, i) => <p key={i}>{x}</p>)}</div>
      </div>
    )
  }
}

export default CreateTodo;
