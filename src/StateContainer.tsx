import * as React from "react";
import produce from "immer";

import { ITodo } from "./types";

// Define the shape of the state. It might be more convenient to embed
// the 'completed' state inside the Todo interface. However, this way it allows
// for demonstration of a map in the state together with a selector to merge
// the data.
interface IState {
  todos: ITodo[];
  textAdd: string;
}

// Define the shape of the context. This is what gets consumed by components
// who wish to get access to the state. You can create selectors and actions
// to provide encapsulated getters and setters.
interface IContext {
  state: IState;
  actions: {
    changeAddText: (text: string) => void;
    addTodo: () => void;
    deleteTodo: (id: number) => void;
  };
}

const initialTodos = [
  { id: 1, text: "Do the laundry" },
  { id: 2, text: "Dance around the room" },
  { id: 3, text: "Buy a motorbike" },
  { id: 4, text: "Jump on the couch" }
];

// Calculate the last ID in the todoList for use in generating new IDs.
let nextId = Math.max(...initialTodos.map(t => t.id)) + 1;


// Create a React Context. Use an empty object as a default value, since
// the intent is to only use the Provider in the StateContainer. Cast
// this object to a IContext to prevent typescript from complaining.
const StateContext = React.createContext<IContext>({} as IContext);

class StateContainer extends React.PureComponent<{}, IState> {
  state = {
    todos: initialTodos,
    textAdd: ""
  };


  deleteTodo = (id: number) => {
    // Use immer's produce for an immutable state update.
    this.setState(
      produce<IState>(state => {
        const index = state.todos.findIndex(todo => todo.id === id);
        state.todos.splice(index, 1);
      })
    );
  };

  addTodo = () => {
    // Generate a new Todo using nextId (and increment it) and reset
    // textAdd (the text in the input field)
    this.setState(prevState => {
      const todo: ITodo = {
        id: nextId++,
        text: this.state.textAdd
      };

      return {
        todos: [todo, ...prevState.todos],
        textAdd: ""
      };
    });
  };

  changeAddText = (text: string) => {
    this.setState({ textAdd: text });
  };

  render() {
    // Build the context object with the cotainer state and all the
    // implementations of the selectors and actions.
    const context = {
      state: this.state,
      actions: {
        deleteTodo: this.deleteTodo,
        addTodo: this.addTodo,
        changeAddText: this.changeAddText
      }
    };

    // Pass the contet object as a value of the Context Provider. Then
    // render any children below it.
    return (
      <StateContext.Provider value={context}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}

export default StateContainer;
export const StateConsumer = StateContext.Consumer;
