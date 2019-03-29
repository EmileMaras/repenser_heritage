import * as React from "react";

import { StateConsumer } from "./StateContainer";
import TodoInput from "./TodoInput";

export default () => (
  <StateConsumer>
    {({ state, actions }) => (
      <TodoInput
        tranche={state.entryAdd}
        handleChange={actions.changeAddEntry}
        handleSubmit={actions.addTodo}
      />
    )}
  </StateConsumer>
);
