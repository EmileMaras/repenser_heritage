import * as React from 'react';
import { StateConsumer } from './StateContainer';

import TodoListContainer from './TodoListContainer';
import TodoInputContainer from './TodoInputContainer';
import Figure from './Figure';
import FigureDistribution from './FigureDistribution';

function get_css_style_from_width(w:number){
  var name ="third-container"
  if (w<800){
    name = "container"
  }
  return name
}

function get_css_style_from_width2(w:number){
  var name ="two-third-container"
  if (w<800){
    name = "container"
  }
  return name
}
export default () => {

  
  return (
<StateConsumer>
{({state, actions }) => (<div>
  <div className={get_css_style_from_width(state.width)}>
    <h3>
    Choisissez les taux de mutualisation
    </h3>
    <TodoInputContainer />
    <TodoListContainer />
	Avec ce ratio il faudrait environ {Math.round(25/(state.ratioPartDeces-1))} années 
	pour que l'âge limite auquel les citoyens peuvent toucher leur part d'héritage mutualisé soit de 25 ans.
  </div>
  <div className={get_css_style_from_width2(state.width)}>
    <h3>
    Visualisez les conséquences sur la distribution de l'héritage
    </h3>

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


<FigureDistribution 
   hBrute={state.heritageBrute} 
   hNet={state.heritageNet} 
   hMut={state.heritageMutualiseTotal} 
   ratioPartDeces={state.ratioPartDeces}
/>

<Figure 
    todoData={state.todos} 
    heritageMutualiseTotal={state.heritageMutualiseTotal}
    ratioPartDeces={state.ratioPartDeces}
/>

  </div>
 </div>)}
</StateConsumer>
)};
