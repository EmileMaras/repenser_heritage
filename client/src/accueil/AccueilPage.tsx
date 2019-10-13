import * as React from "react";
import {StateConsumer, initialTodos} from '../StateContainer'
import FigureDistributionBrute from './FigureDistributionBrute'
import FigureDistribution from './FigureMutualisee'
import axios from "axios";
import { NavLink} from "react-router-dom";

class AccueilPage extends React.Component {
  viewHandler = async () => {
    axios(`http://repensonslheritage.eu/RepenserLHeritage.pdf`, {
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
        <div className="blocktext">
            <h3>
            Repensons (les modes de transmission de) l'héritage?
            </h3>
Cette page fait un résumé des inégalités résultant du mode actuel de transmission de l'héritage et présente le principe d'une mutualisation partielle de l'héritage.
Pour des informations plus détaillées (incluant notamment les références) veuillez télécharger le document suivant:
<div>
  <a href="http://repensonslheritage.eu/RepenserLHeritage.pdf">Document détaillé</a>
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
  <li> l'héritage est important dans la vie des citoyens français : il représente en moyenne environ 20 % de leur revenu total</li>
  <li> le mode actuel de transmission de l'héritage présente deux défauts majeurs :
    <ul>
  <li> l'héritage est très inégalement redistribué. <i> Voir la section suivante </i></li>
  <li> les citoyens bénéficient de leur héritage relativement tard dans leur vie : l'âge moyen auquel les français touchent une succession est d'environ 50 ans </li>
    </ul>
  </li>
  <li> des alternatives sont possibles</li> 
</ul>
            <h4>
            Estimation des inégalités face à l'héritage.
            </h4>
        
La figure suivante représente une estimation de la distribution des héritages en France. 
   <i> Lecture : 50% de la population française héritera de moins de 150 289 euros, 50% héritera de plus. </i>  
<FigureDistributionBrute />
  <div>     
<b> Avertissement :</b> estimer la distribution de l'héritage est un exercice complexe. 
Cette figure est obtenue à partir d'une modélisation. Il est légitime de questionner à la fois les sources sur lesquelles s'appuie cette modélisation ainsi que les hypothèses simplificatrices qui sont faites.

Néanmoins, cette distribution est, à ma connaissance, la plus fiable et permet de se faire une bonne idée de l'ordre de grandeur des inégalités face à l'héritage. 
  </div>         
<b>Quelques remarques sur cette distribution de l'héritage :</b> 
  <ul>
    <li> 10% de la population héritera de moins de 1100 euros </li>
    <li> 20% de la population héritera de moins de 13 000 euros </li>
    <li> 15% de la population héritera de plus de 622 000 euros ce qui correspond à plus que ce que touche un salarié rémunéré au SMIC sur l'ensemble d'une carrière de 45 ans. </li>
    <li> Il n'y a pas de limite théorique au montant dont un individu peut hériter. On peut néanmoins estimer que chacun des enfants de Bernard Arnaud héritera d'environ 16 milliards d'euros. 
AJOUTER UNE COMPARAISON.
    </li> 
    
  </ul>
Les inégalités présentées précédemment sont amplifiées par les facteurs suivants :
  <ul>
    <li> en moyenne, plus une personne bénéficie d'un héritage conséquent plus son salaire est important. Cela s'explique en partie par le fait que les personnes qui transmettent un héritage important à leurs enfants ont généralement été en mesure de les aider financièrement pendant leurs études.</li>
    <li> un héritage peut rapporter un revenu fixe. Quelqu'un qui hérite d'un appartement peut par exemple le louer et en obtenir un revenu.</li>
    
  </ul>          

            <h4>
            Et si on mutualisait une partie de l'héritage?    
            </h4>
<div>Il est possible de réformer les modes de transmission de l'héritage afin de diminuer les inégalités.
</div> 
On pourrait par exemple utiliser le principe de mutualisation-redistribution suivant. 
        <h5> Mutualisation </h5>
        
A chaque fois qu'une personne bénéficie d'un héritage par donation ou succession, 
la valeur de l'héritage est estimée et le bénéficiaire doit s'acquiter d'un montant proportionnel à cette valeur selon un taux de mutualisation fixé légalement. 
Ce taux de mutualisation dépend uniquement de la valeur cumulée de l'ensemble des héritages dont cette personne a bénéficiée au cours de sa vie et augmente progressivement par tranche.   
Afin d'illustrer le principe, je propose les taux suivants.  Après un abattement de 100 000 euros, le taux sur les tranches supplémentaires augmenterait progressivement de 20% à 95% tel que présenté dans le tableau suivant (<i>le principe de  mutualisation par tranche peut être illustrée par l'exemple 
<span title=" A 30 ans Paul bénéficie pour la première fois d'une donation de 80 000 euros. Ce montant étant inférieur à 100 000 euros, il ne contribue pas à la mutualisation et touche l'intégralité des 80 000 euros. Cinq ans plus tard, il bénéficie encore d'une donation de 80 000 euros brut. Le montant cumulé brut dont il a bénéficié est de 160 000 euros. Ce montant dépasse la première tranche de 60 000 euros. Il y a un taux de mutualisation de 20% dans cette tranche, il doit donc contribuer à la mutualisation de l'héritage à hauteur de 12 000 euros. Le montant net qu'il recevra suite à cette deuxième donation sera donc de 68 000 euros. Quelques années plus tard, il bénéficie d'une succession de 300 000 euros. Le montant cumulé qu'il avait perçu précédemment était de 160 000 euros. Il doit donc s'affranchir d'un taux de 20% sur 90 000 pour compléter la première tranche (fin de tranche à 250 000 euros), puis d'un taux de 40% sur les 210 000 euros suivant. Il doit donc contribuer à la mutualisation de l'héritage à hauteur de 90 000 x 0,2 + 210 000 x 0,4 = 91 200 euros."> <dt> suivant. </dt> </span>
</i>) :
   <div>     
    <div className="third-container-no-border">
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
   </div>
Je précise également que cette contribution à la mutualisation remplace les taxes sur les successions et donations qui existent actuellement. 
Afin de ne pas faire de trou dans le budget de l'État, un montant équivalent à ce qui est acutuellement perçu sur les taxes sur les donations et succession est prélevé par l'État dans la caisse nationale des héritages.
L'argent ainsi récolté alimente la caisse nationale des héritages. 

        <h5> Redistribution</h5>
A la fin de chaque année fiscale, l'argent ainsi accumulé est divisé en parts et redistribué. 
Le nombre de parts distribuées est proportionnel au nombre de décès. 
Chaque citoyen peut à partir de sa majorité demander quand il le souhaite à toucher sa part d'héritage. Il ne peut toucher qu'une seule part au court de sa vie. Il peut demander à toucher sa part intégralement en une fois ou il peut demander à la toucher en plusieurs fois.

A la mise en place d'une telle réforme, la majorité des citoyens n'ont pas encore touché leur part d'héritage. 
Il y aurait donc initialement bien plus de demandeurs que de parts disponibles. 
Les demandeurs sont sélectionnés en commencant par les plus âgés jusqu'à ce que toutes les parts disponibles soient distribuées.
Les demandeurs restants ne peuvent pas toucher leur part d'héritage cette année là et doivent renouveler leur demande ultérieurement.
        
Afin de faire dimininuer progressivement l'âge moyen auquel les citoyens peuvent toucher leur part d'héritage mutualisé, 
le nombre de parts distribuées serait initialement supérieur au nombre de décès. 
On peut par exemple fixer le nombre de parts à 1,5 fois le nombre de décès ce qui permet de faire dimininuer chaque année 
        d'environ 6 mois l'âge moyen auquel les citoyens peuvent toucher leur part d'héritage mutualisé. 

A long terme, pour une population stable, il y aurait en moyenne autant de demandeurs que de décès et il y aurait autant de parts distribuées que de demandeurs.


<h5> Conséquences sur la distribution de l'héritage </h5>
La figure suivante présente la distribution actuelle de l'héritage (rouge) ainsi que celle résultant d'une telle réforme (bleu).
Avec les taux de mutualisation proposés, l'héritage mutualisé représenterait environ 50% de l'héritage total.
On estime qu'une part d'héritage mutualisée serait d'environ 130 000 euros. 
Cette réforme serait bénéficiaire pour plus de 80% des citoyens (puisque la valeur d'une part d'héritage mutualisée serait plus importante que leur contribution à la mutualisation).
<FigureDistribution />        

<h5> Fixons collectivement les taux de mutualisation</h5> 

Il y a deux aspirations fondamentales et antagonistes face au choix du mode de transmission de l'héritage.
Il y a d'un côté une aspiration au maintien du patrimoine dans le cercle familial et de l'autre une aspiration à l'égalité entre citoyens. Nous sommes actuellement dans un système qui favorise très largement la première aspiration au détriment de la deuxième. 
En ajustant les taux de mutualisation on peut trouver un "équilibre" entre ces deux aspirations.
Les taux que j'ai proposés ici permettent selon moi d'avoir un tel équilibre, mais personne n'a la légitimité de fixer seul cet équilibre.                 
Il est nécessaire d'avoir un débat afin de fixer collectivement les taux de mutualisation.
Afin que chacun puisse se faire sa propre idée sur les taux de mutualisation qui lui semblent justes, 
un simulateur permettant de calculer la distribution de l'héritage en fonction des taux de mutualisation est mis à votre disposition ici :
        
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
