import * as React from "react";
import Figure from './Figure';
import { ITodo } from "./types";

export interface IProps {
  todos: ITodo[];
  handleDelete: (id: number) => void;
}

export interface ITodos{
    todos: ITodo[];  
}

const TodoList: React.SFC<IProps> = props => {
   var todosToSend: ITodos ;
   todosToSend= {todos: props.todos};
   return (
    <div className="half-container">
      <table>
        <thead>
          <tr>
            <th>Limite haute tranches (€)</th>
            <th>Taux (%)</th>
            <th>Enlever</th>
          </tr>
        </thead>
        <tbody>        
        {props.todos.map(todo => (
            <tr key={todo.id}>
                <td>{todo.tranche}</td>
                <td>{todo.taux}</td>
                <td> 
                    <button type="button" onClick={() => props.handleDelete(todo.id)}>
                    Delete
                    </button>
                </td>
            </tr>          
        ))}
        </tbody>
      </table>
      <Figure todoData={todosToSend}/>
    </div>
  );
};

export default TodoList;
