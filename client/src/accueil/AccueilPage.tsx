import * as React from "react";
import {StateConsumer, initialTodos} from '../StateContainer'
import FigureDistributionBrute from './FigureDistributionBrute'
import FigureDistribution from './FigureMutualisee'
import axios from "axios";
import { NavLink} from "react-router-dom";

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
            Définitions et remarques   
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
      
En France, les taxes sur les successions et sur les donations sont en moyenne inférieures à 6%.

            <h4>
            Pourquoi repenser les modes de transmission de l'héritage?
            </h4>
Il est nécessaire de repenser et de transformer les modes de transmission de l'héritage car :
<ul>
  <li> l'héritage est important dans la vie des citoyens français: il représente en moyenne environ 20 % de leur revenu total</li>
  <li> le mode actuel de transmission de l'héritage présente deux défauts majeurs:
    <ul>
  <li> l'héritage est très inégalement redistribué. <i> Voir la section suivante </i></li>
  <li> les citoyens bénéficient de leur héritage relativement tard dans leur vie: l'âge moyen auquel les français touchent une succession est d'environ 50 ans </li>
    </ul>
  </li>
  <li> des alternatives sont possibles</li> 
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

            <h4>
            Et si on mutualisait une partie de l'héritage?    
            </h4>
Il est possible de réformer les modes de transmission de l'héritage afin de diminuer les inégalités.
On pourrait par exemple mutualiser une partie de l'héritage selon les principes suivants :
à chaque fois qu'une personne bénéficie d'un héritage par donnation ou succession, une partie de cet héritage est mutualisé afin d'être redistribué équitablement au sein de la population. 
Le taux de mutualisation dépend uniquement de la valeur cumulée de l'ensemble des héritages dont cette personne a bénéficiée et augmente progressivement par tranche.   

L'argent ainsi récolté alimente la caisse nationale des héritages. A la fin de chaque année fiscale, l'argent accumulé serait divisé en parts et redistribué. 
Le nombre de parts distribuées serait proportionnel au nombre de décès. 
Chaque citoyen pourrait à partir de sa majorité demander quand il le souhaite à toucher sa part d'héritage. Il ne pourrait toucher qu'une seule part au court de sa vie. Il pourrait demander à toucher sa part intégralement en une fois ou il pourrait demander à la toucher en plusieurs fois.

A la mise en place d'une telle réforme, la majorité des citoyens n'ont pas encore touché leur part d'héritage. 
Il y aurait donc initialement bien plus de demandeurs que de parts disponibles. 
Les demandeurs sont sélectionnés en commencant par les plus âgés jusqu'à ce que toutes les parts disponibles soient distribuées.
Les demandeux restants ne peuvent pas toucher leur part d'héritage cette année là et doivent renouveler leur demande ultérieurement.
        
Afin de faire dimininuer progressivement l'âge moyen auquel les gens peuvent toucher leur part d'héritage mutualisé, 
le nombre de parts distribuées serait initialement suppérieur au nombre de décès. 
On peut par exemple fixer le nombre de parts à 1,5 fois le nombre de décès ce qui permet de faire dimininuer chaque année 
        d'environ 6 mois l'âge moyen auquel les citoyens peuvent toucher leur part d'héritage mutualisé 

A long terme, pour une population stable, il y aurait en moyenne autant de demandeurs que de décès et il y aurait autant de parts distribuées que de demandeurs.


Afin d'illustrer le principe, je propose les taux suivants qui selon mon opinion personnel permettrait d'avoir un bon équilibre entre héritage ``filial'' et héritage mutualisé.  Après un abattement de 100 000 euros, le taux sur les tranches supplémentaires augmenterait progressivement de 20% à 95% tel que présenté dans le tableau suivant:
    <div>
      <table >
           <col width="70%"/>
           <col width="30%"/>
        <thead>
          <tr>
            <th>Début tranche (€)</th>
            <th>Taux (%)</th>
          </tr>
        </thead>
        <tbody>        
            <tr key={initialTodos[0].id}>
                <td>{initialTodos[0].tranche}</td>
                <td>{initialTodos[0].taux}</td>
            </tr>          
            <tr key={initialTodos[1].id}>
                <td>{initialTodos[1].tranche}</td>
                <td>{initialTodos[1].taux}</td>
            </tr>  
            <tr key={initialTodos[2].id}>
                <td>{initialTodos[2].tranche}</td>
                <td>{initialTodos[2].taux}</td>
            </tr>  
            <tr key={initialTodos[3].id}>
                <td>{initialTodos[3].tranche}</td>
                <td>{initialTodos[3].taux}</td>
            </tr>  
            <tr key={initialTodos[4].id}>
                <td>{initialTodos[4].tranche}</td>
                <td>{initialTodos[4].taux}</td>
            </tr>  
        </tbody>
      </table>
    </div>
Je précise également que cette contribution à la mutualisation remplace les taxes sur les successions et donations qui existent actuellement. 
Afin de ne pas faire de trou dans le budget de l'état, un montant équivalent à ce qui est acutuellement perçu sur les taxes sur les donations et succession est prélevé par l'état dans la caisse nationale des héritages.

La figure suivante présente la distribution actuelle de l'héritage (rouge) ainsi que celle résultant d'une telle réforme (bleu).
Avec les taux de mutualisation proposés, l'héritage mutualisé représenterait environ 50% de l'héritage totale.
On estime qu'une part d'héritage mutualisée serait d'environ 130 000 euros. 
Cette réforme serait bénéficiaire pour plus de 80% des citoyens (puisque la valeur d'une part d'héritage mutualisée serait plus importante que leur contribution à la mutualisation).
<FigureDistribution />        


        
Les taux de mutualisation devraient être fixés après avoir été débatus au sein de la société. 
Afin que chacun puisse se faire sa propre idée sur les taux de mutualisation qui lui semble juste, 
un simulateur vous permet de voir quelle serait la distribution de l'héritage en fonction des taux de mutualisation que vous aurez choisis :
        
<nav>
    <NavLink
      to="/simulation"
      //className="header-link"
      //activeClassName="header-link-active"
    >
    Lien vers le simulateur
    </NavLink>
</nav>
         </div>        

        )
    }
}
         
export default AccueilPage;
