import * as React from "react";

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
		<div className="text-center">
           	<button 
                type="button" 
                onClick={() => {props.updateUnit()}}
            >
            {text}
            </button>		
		</div>
	)
	
	
}

export default SwitchUnit