import * as React from 'react';
import { StateConsumer } from './StateContainer';

import TodoListContainer from './TodoListContainer';
import TodoInputContainer from './TodoInputContainer';
import Figure from './Figure';

export default () => (
 <div>
  <div className="third-container">
    <h2>
    Choisissez les taux de mutualisation
    </h2>
    <TodoInputContainer />
    <TodoListContainer />
    <StateConsumer>
        {({state, actions }) => (
        <Figure todoData={state.todos}/>)}
    </StateConsumer>
  </div>
  <div>
    <StateConsumer>
    {({state, actions }) => (
    <Figure todoData={state.todos}/>)}
    </StateConsumer>
  </div>
 </div>
);
