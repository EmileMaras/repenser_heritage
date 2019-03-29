import * as React from "react";
import produce from "immer";

import { ITodo } from "./types";
 
// Define the shape of the state. It might be more convenient to embed
// the 'completed' state inside the Todo interface. However, this way it allows
// for demonstration of a map in the state together with a selector to merge
// the data.
interface IState {
  todos: ITodo[];
  trancheAdd: number;
  tauxAdd: number;
  errormessage: string;
}

// Define the shape of the context. This is what gets consumed by components
// who wish to get access to the state. You can create selectors and actions
// to provide encapsulated getters and setters.
interface IContext {
  state: IState;
  actions: {
    changeAddEntry: (tranche: number) => void;
    changeAddTaux: (taux: number) => void;      
    addTodo: () => void;
    deleteTodo: (id: number) => void;
  };
}

const initialTodos = [
  { id: 1, tranche: 100000, taux: 0 },
  { id: 2, tranche: 250000, taux: 20},
  { id: 3, tranche: 500000, taux: 40},
  { id: 4, tranche: 750000, taux: 60}
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
    trancheAdd: 0,
    tauxAdd: 0,
    errormessage: ""
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
        tranche: this.state.trancheAdd,
        taux: this.state.tauxAdd,
      };
      console.log("coucou")      
      var entryOk = true;
      var errormessageloc = ""
      //we fist check if the entry is valid
      for (let olddo  of prevState.todos){
        if (olddo.taux === todo.taux) {entryOk = false;
                                       errormessageloc = "il ne peut pas y avoir deux taux égaux"}
        if (olddo.tranche === todo.tranche) {entryOk = false;
                                             errormessageloc = "il ne peut pas y avoir deux limites de tranche égales"}
        if (olddo.tranche > todo.tranche && olddo.taux < todo.taux) 
            {entryOk = false;
             errormessageloc = "le taux doit croitre avec les tranche"};
        if (olddo.tranche < todo.tranche && olddo.taux > todo.taux) 
            {entryOk = false;
             errormessageloc = "le taux doit croitre avec les tranche"};
      }
      var sortedTodo: ITodo[] = prevState.todos
      if (entryOk) {
      sortedTodo = [todo, ...prevState.todos]
      sortedTodo.sort((leftSide, rightSide): number => {
          if (leftSide.tranche < rightSide.tranche) return -1;
          if (leftSide.tranche > rightSide.tranche) return 1;
          return 0;
          });
      }     
      
      if (entryOk) {  
      return {
        todos: sortedTodo,
        trancheAdd: 0,
        tauxAdd: 0,
        errormessage: ""}
      } else {
       return {todos: prevState.todos,
        trancheAdd: 0,
        tauxAdd: 0,
        errormessage: errormessageloc}
        };       
    });
  };

  changeAddEntry = (tranche: number) => {
    this.setState({ trancheAdd: tranche });
  };

  changeAddTaux = (taux: number) => {
    this.setState({ tauxAdd: taux });
  };
    
    
  render() {
    // Build the context object with the cotainer state and all the
    // implementations of the selectors and actions.
    const context = {
      state: this.state,
      actions: {
        deleteTodo: this.deleteTodo,
        addTodo: this.addTodo,
        changeAddEntry: this.changeAddEntry,
        changeAddTaux: this.changeAddTaux
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
