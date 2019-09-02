import * as React from "react";
import {StateConsumer} from '../StateContainer'
import FigureDistributionBrute from './FigureDistributionBrute'
import axios from "axios";


class AccueilPage extends React.Component {
  viewHandler = async () => {
    axios(`http://localhost:4000/pdf`, {
      method: "GET",
      responseType: "blob"
      //Force to receive data in a Blob Format
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  };


    render(){
        return(
         <div>
            <h3>
            Repensons (les modes de transmission de) l'héritage?
            </h3>
Cette page fait un résumé des inégalités du mode actuel de transmission de l'héritage et présente le principe d'une mutualisation partielle de l'héritage.
Pour plus d'informations télécharger le document suivant:
      <div>
        <button onClick={this.viewHandler}> Télécharger notes détaillés </button>{" "}
      </div> 
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
  <li> l'héritage est très inégalement redistribué. 
La figure suivante représente une estimation de la distribution des héritages. 
   <i> Lecture : 50% de la population héritera de moins de 150 289 euros, 50% héritera de plus. </i>  
  </li>

<FigureDistributionBrute />
</ul>
         </div>
        )
    }
}

export default AccueilPage;
