import * as React from "react";

import { StateConsumer } from "./StateContainer";
import TodoInput from "./TodoInput";

export default () => (
  <StateConsumer>
    {({ state, actions }) => (
      <TodoInput
        text={state.textAdd}
        handleChange={actions.changeAddText}
        handleSubmit={actions.addTodo}
      />
    )}
  </StateConsumer>
);
