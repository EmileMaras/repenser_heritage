import * as React from "react";

import { StateConsumer } from "./StateContainer";
import TodoList from "./TodoList";

export default () => (
  <StateConsumer>
    {({state,  actions }) => (
      <TodoList
        todos={state.todos}
        handleDelete={actions.deleteTodo}
        updateHeritage={actions.updateHeritageNet}
      />
    )}
  </StateConsumer>
);
