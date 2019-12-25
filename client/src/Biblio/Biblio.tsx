import * as React from "react";
import axios from "axios";


class Biblio extends React.Component {

  render() {
    return (
<div className="blocktext">
  <h4> A lire :</h4>
 <div className="biblio">

  <ul>
  <li> 
    <b><a href="https://www.strategie.gouv.fr/publications/eviter-une-societe-dheritiers">Peut-on éviter une société d'héritiers ? </a> </b> <br></br>
  Clément Dherbécourt (France Stratégie, 2017)
  </li>
  <li> 
    <b> Les nouveaux héritiers </b> <br></br>
  Nicolas Frémeaux (La république des idées, 2018)
  </li>

  <li> 
    <b> L'héritage </b> <br></br>
  Anne Gotman (Que sais-je ? Presses Universitaires de France, 2006)
  </li>

  <li> 
    <b> Catéchisme révolutionnaire </b> <br></br>
   Michel Bakounine (1866)
  </li>

  <li> 
    <b> Le capital au XXIème siècle </b> <br></br>
   Thomas Piketty (Éditions du Seuil, 2013)
  </li>

  <li> 
    <b> Capital et idéologie </b> <br></br>
   Thomas Piketty (Éditions du Seuil, 2019)
  </li>

  <li> 
    <b> <a href="http://www.toupie.org/Textes/Abolition_droit_heritage.htm">Le plafonnement de l'héritage </a> </b> <br></br>
  	La Toupie
  </li>

  </ul>
 </div>

  <h4> A écouter :</h4>

 <div className="biblio">

  <ul>
  <li> 
    <b><a href="https://www.franceculture.fr/emissions/entendez-vous-leco/entendez-vous-leco-du-jeudi-27-decembre-2018">Hériter pour mieux régner:
Faut-il abolir l'héritage ?</a> </b> <br></br>
  Entendez vous l'éco ? (France Culture 2019)
  </li>

  </ul>
 </div>
</div>
    );
  }
}

export default Biblio;
