import * as React from 'react';


import TodoListContainer from './TodoListContainer';
import TodoInputContainer from './TodoInputContainer';
import Figure from './Figure';

export default () => (
  <div>
    <TodoInputContainer />
    <TodoListContainer />
    <Figure />
  </div>
);
