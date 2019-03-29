import * as React from "react";

import { ITodo } from "./types";

interface IProps {
  todos: ITodo[];
  handleDelete: (id: number) => void;
}

const TodoList: React.SFC<IProps> = props => {
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>
            {todo.tranche}
            <button type="button" onClick={() => props.handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
