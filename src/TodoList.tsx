import * as React from "react";

import { ITodo } from "./types";

interface IProps {
  todos: ITodo[];
  handleDelete: (id: number) => void;
}

const TodoList: React.SFC<IProps> = props => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tranches</th>
            <th>Taux</th>
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
    </div>
  );
};

export default TodoList;
