import * as React from 'react';
import { StateConsumer } from './StateContainer';

import TodoListContainer from './TodoListContainer';
import TodoInputContainer from './TodoInputContainer';
import Figure from './Figure';
import FigureDistribution from './FigureDistribution';

export default () => (
 <div>
  <div className="third-container">
    <h2>
    Choisissez les taux de mutualisation
    </h2>
    <TodoInputContainer />
    <TodoListContainer />
  </div>
  <div className="two-third-container">
    <StateConsumer>
       {({state, actions }) => (
        <FigureDistribution heritageBrute={state.heritageBrute} heritageNet={state.heritageNet}/>)}
    </StateConsumer>
    <StateConsumer>
        {({state, actions }) => (
        <Figure todoData={state.todos} heritageMutualiseTotal={state.heritageMutualiseTotal}/>)}
    </StateConsumer>
  </div>
 </div>
);
