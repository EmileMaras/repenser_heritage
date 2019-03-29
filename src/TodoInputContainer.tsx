import * as React from "react";

import { StateConsumer } from "./StateContainer";
import TodoInput from "./TodoInput";

export default () => (
  <StateConsumer>
    {({ state, actions }) => (
      <TodoInput
        tranche={state.trancheAdd}
        taux={state.tauxAdd}
        handleChange={actions.changeAddEntry}
        handleChangeTaux={actions.changeAddTaux}
        handleSubmit={actions.addTodo}
        errormessage={state.errormessage}
      />
    )}
  </StateConsumer>
);
