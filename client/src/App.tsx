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
    <h3>
    Visualisez les conséquences sur la distribution de l'héritage
    </h3>
    <StateConsumer>
       {({state, actions }) => (
        <div>
         <h5> 
         - Une part d'héritage mutualisé serait  
         de {Math.round(state.heritageMutualiseTotal / state.ratioPartDeces)} euros.
         </h5>
         <h5>
         - A l'échelle nationale, l'héritage mutualisé 
         représenterait {Math.round(state.heritageMutualiseTotal / 390000 * 1000) / 10} 
         % de l'héritage total. 
         </h5>
        </div>
        )}
    </StateConsumer>
    <StateConsumer>
       {({state, actions }) => (
<FigureDistribution 
   hBrute={state.heritageBrute} 
   hNet={state.heritageNet} 
   hMut={state.heritageMutualiseTotal} 
   ratioPartDeces={state.ratioPartDeces}
/>)}
    </StateConsumer>
    <StateConsumer>
        {({state, actions }) => (
        <Figure 
            todoData={state.todos} 
            heritageMutualiseTotal={state.heritageMutualiseTotal}
            ratioPartDeces={state.ratioPartDeces}
        />)}
    </StateConsumer>
  </div>
 </div>
);
