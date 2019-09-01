import * as React from "react";
import {StateConsumer} from '../StateContainer'
import FigureDistributionBrute from './FigureDistributionBrute'



class AccueilPage extends React.Component {


    render(){
        return(
         <div>
            <h3>
            Repensons (les modes de transmission de) l'héritage?
            </h3>
            <h4>
            Définitions    
            </h4>
<ul>
 <li>                
  Les <b>modes de transmission de l'héritage</b> sont les moyens qui permettent de transférer du patrimoine d'une personne à une autre sans contrepartie. 
  La grande majorité de l'héritage est actuellement transmis en ligne direct (i.e. entre parent et enfants).
  En France, il y a deux modes principaux de transmission de l'héritage, la <b>donation</b> et la <b>succession</b>. 
 </li>               
 <li>                 
  La <b>succession</b> est une transmission du patrimoine d’une personne décédée à une ou plusieurs personnes vivantes.
 </li>               
 <li>                 

  La <b>donation</b> est une transmission d’une partie du patrimoine d’une personne vivante à une ou plusieurs personnes.
 </li>
 <li>
  Le patrimoine d’une personne est constitué de l’ensemble de ses biens et de ses obligations, appréciables en argent, et dans lequel entrent les actifs (valeurs, créances) et les passifs (dettes, engagements). 
 </li>           
</ul>
            <h4>
            Pourquoi repenser les modes de transmission de l'héritage?
            </h4>
Il est nécessaire de repenser et de transformer les modes de transmission de l'héritage car :
<ul>
  <li> l'héritage est important dans la vie des citoyens français: il représente en moyenne environ 20 % de leur revenu total</li>
  <li> l'héritage est très inégalement redistribué </li>  
</ul>
<FigureDistributionBrute />
         </div>
        )
    }
}

export default AccueilPage;
