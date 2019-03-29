import * as React from 'react';

import { StateConsumer } from './StateContainer';
import TodoListContainer from './TodoListContainer';
import TodoInputContainer from './TodoInputContainer';

export default () => (
  <div>
    <TodoInputContainer />
    <TodoListContainer />
    Internal state:
    <pre>
      <StateConsumer>
        {({ state }) => JSON.stringify(state, null, 2)}
      </StateConsumer>
    </pre>
  </div>
);
