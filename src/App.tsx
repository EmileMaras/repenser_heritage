import * as React from 'react';
import { StateConsumer } from './StateContainer';

import TodoListContainer from './TodoListContainer';
import TodoInputContainer from './TodoInputContainer';
import Figure from './Figure';

export default () => (
  <div>
    <TodoInputContainer />
    <TodoListContainer />
    <StateConsumer>
        {({state, actions }) => (
        <Figure todoData={state.todos}/>)}
    </StateConsumer>
  </div>
);
