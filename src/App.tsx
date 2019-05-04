import * as React from 'react';
import { StateConsumer } from './StateContainer';

import TodoListContainer from './TodoListContainer';
import TodoInputContainer from './TodoInputContainer';
import Figure from './Figure';
import FigureDistribution from './FigureDistribution';

export default () => (
 <div>
  <div className="third-container">
    <h3>
    Choisissez les taux de mutualisation
    </h3>
    <TodoInputContainer />
    <TodoListContainer />
  </div>
  <div className="two-third-container">
    <StateConsumer>
       {({state, actions }) => (
        <h3> 
        L'héritage mutualisé représenterait state.heritageMutualiseTotal/390000 % de l'héritage total 
        </h3>)}
    </StateConsumer>
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
