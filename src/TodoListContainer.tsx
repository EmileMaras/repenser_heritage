import * as React from "react";

import { StateConsumer } from "./StateContainer";
import TodoList from "./TodoList";

export default () => (
  <StateConsumer>
    {({state,  actions }) => (
      <TodoList
        todos={state.todos}
        handleDelete={actions.deleteTodo}
        ratioPartDeces={state.ratioPartDeces}
        handleRatioChange={actions.changeRatio}
      />
    )}
  </StateConsumer>
);
