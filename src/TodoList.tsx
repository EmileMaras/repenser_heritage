import * as React from "react";
import { ITodo } from "./types";

export interface IProps {
  todos: Array<ITodo>;
  handleDelete: (id: number) => void;
}


const TodoList: React.SFC<IProps> = props => {
   //var todosToSend: ITodos ;
   //todosToSend= {todoData: props.todos};
   return (
    <div >
      <table>
        <thead>
          <tr>
            <th>Fin tranche (€)</th>
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
                    Enlever
                    </button>
                </td>
            </tr>          
        ))}
        </tbody>
      </table>

    </div>
  );
};

export default TodoList;
