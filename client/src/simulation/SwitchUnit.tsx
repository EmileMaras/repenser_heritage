import * as React from "react";
import {smic_annuel} from '../StateContainer';
export interface IProps{
	unit: string;
	updateUnit: () => void;
}

const SwitchUnit: React.SFC<IProps> = props => {
	
	var text: string;
	if (props.unit == "euros"){
		text = "Visualisez en équivalent d'années de SMIC."
	}
	else {text = "Visualisez en euros."}
	return(
	  <div>	
		<div className="text-center">
           	<button 
                type="button" 
                onClick={() => {props.updateUnit()}}
            >
            {text}
            </button>		
		</div>
		<div className="text-center-small">
En se basant sur un SMIC mensuel net de {smic_annuel/12} euros, une année de SMIC vaut {smic_annuel} euros.		
		</div>
	  </div>
	)
	
	
}

export default SwitchUnit