import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo store={this.props.store} />
        {this.props.store.getState().todos.join(" ")}
      </div>
    );
  }
}

export default App;
