
// ./src/components/todos/CreateTodo.js

import React, { Component } from 'react';

class CreateTodo extends Component {

 constructor() {
   super();
   this.state = {
     text: '',
   };
 }

 handleChange(event) {
   this.setState({
     text: event.target.value
   });
 }

 handleSubmit(event) {
  event.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_TODO',
    todo: this.state,
  });
}

 render() {
   return(
     <div>
       <form onSubmit={(e)=>this.handleSubmit(e)}>
         <p>
           <label>add todo</label>
           <input
         type="text"
         onChange={(e) => this.handleChange(e)} />
         </p>
         <input type="submit" />
      </form>
      {this.state.text}
    </div>
  );
 }
};

export default CreateTodo;
