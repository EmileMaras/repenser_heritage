import * as React from "react";

import { StateConsumer } from "./StateContainer";
import TodoList from "./TodoList";

export default () => (
  <StateConsumer>
    {({ selectors, actions }) => (
      <TodoList
        todos={selectors.getTodosWithCompleted()}
        handleTick={actions.toggleCompleted}
        handleDelete={actions.deleteTodo}
      />
    )}
  </StateConsumer>
);
