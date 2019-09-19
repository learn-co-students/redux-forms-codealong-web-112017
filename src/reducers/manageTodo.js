export default function manageTodo(state = {
  todos: [],
}, action) {

  if (action.type === 'add_todo') {
    console.log("hit the reducer")
    return {todos: [...state.todos, action.todo]}

  }
  return state;
}
