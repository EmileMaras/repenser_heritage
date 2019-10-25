import * as React from 'react';
import { StateConsumer, smic_annuel } from './StateContainer';

import TodoListContainer from './TodoListContainer';
import SwitchUnitContainer from './simulation/SwitchUnitContainer';
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
{({state, actions }) => {
   var textpart: string
   var heritage_euros: number = Math.round(state.heritageMutualiseTotal / state.ratioPartDeces);
   var heritage_smic: number = Math.round(heritage_euros/smic_annuel * 100)/100
   if (state.unit == "euros"){
	textpart = " de " + heritage_euros.toString() + " euros."
   }
   else {
	textpart = " équivalent à  " + heritage_smic.toString() + " années de SMIC."
   }
   return (<div>
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
		<SwitchUnitContainer/>
         <h5> 
         - Une part d'héritage mutualisé serait  
         {textpart}
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
   unit={state.unit}
   hMut={state.heritageMutualiseTotal} 
   ratioPartDeces={state.ratioPartDeces}
/>

<Figure 
    todoData={state.todos} 
    heritageMutualiseTotal={state.heritageMutualiseTotal}
    ratioPartDeces={state.ratioPartDeces}
/>

  </div>
 </div>)}}
</StateConsumer>
)};
