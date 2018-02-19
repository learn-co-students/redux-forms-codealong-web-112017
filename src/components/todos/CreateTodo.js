import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }


  handleInput = (e) => {
    this.setState({text:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: 'add_todo', todo: this.state.text})
    debugger
  }

  render() {
    return(
      <div>
        <form  onSubmit={this.handleSubmit}>
          <input type='text' placeholder='enter new to do here' onChange={this.handleInput} value={this.state.text}></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

export default CreateTodo;
