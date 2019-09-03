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
Cette page fait un résumé des inégalités résultant du mode actuel de transmission de l'héritage et présente le principe d'une mutualisation partielle de l'héritage.
Pour des informations plus détaillées (incluant notamment les références) veuillez télécharger le document suivant:
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
  <li> l'héritage est très inégalement redistribué. <i> Voir la section suivante </i></li>
  <li> il existe des alternatives </li> 
</ul>
            <h4>
            Estimation des inégalités face à l'héritage.
            </h4>
        
La figure suivante représente une estimation de la distribution des héritages. 
   <i> Lecture : 50% de la population héritera de moins de 150 289 euros, 50% héritera de plus. </i>  
<FigureDistributionBrute />
  <div>     
<b> Avertissement :</b> estimer la distribution de l'héritage est un exercice complexe. 
Cette figure est obtenue à partir d'une modélisation basée sur une enquête. 
Comme dans toute modélisation, il y a des hypothèses simplificatrices qui sont faites et je ne prétend pas fournir une estimation précise.
Néenmoins, cette distribution est, à ma connaissance, la plus fiable et permet de se faire une bonne idée sur l'ordre de grandeur des inégalités face à l'héritage. 
  </div>         
Quelques remarques sur cette distribution de l'héritage: 
  <ul>
    <li> 10% de la population héritera de moins de 1100 euros </li>
    <li> 20% de la population héritera de moins de 13 000 euros </li>
    <li> 15% de la population héritera de plus de 622 000 euros ce qui corresponds à plus que ce que touche un salarié rémunéré au SMIC sur l'ensemble d'une carrière de 45 ans. </li>
    <li> Il n'y a pas de limite théorique au montant dont un individu peut hériter. On peut néanmoins estimer que chacun des enfants de Bernard Arnaud héritera d'environ 16 milliard d'euros. 
AJOUTER UNE COMPARAISON.
    </li> 
    
  </ul>
De plus plusieurs facteurs amplifient ces inégalités :
  <ul>
    <li> en moyenne, plus une personne bénéficie d'un gros héritage plus son salaire est important. Cela s'explique en partie par le fait que les personnes qui transmettent un héritage important à leurs enfants ont généralement été en mesure de les aider financièrement pendant leurs études.</li>
    <li> un héritage peut rapporter un revenu fixe. Quelqu'un qui hérite d'un appartement peut par exemple le louer et en obtenir un revenu.</li>
    
  </ul>          



       
         </div>
        )
    }
}

export default AccueilPage;
