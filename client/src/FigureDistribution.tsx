import * as React from "react";
import Plot from 'react-plotly.js';
import { IHeritage } from './types';
import {smic_annuel} from './StateContainer';

export interface ITodos{
    hBrute: Array<IHeritage>,
    hNet: Array<IHeritage>,
    hMut: number,
	unit: string,
    ratioPartDeces: number
}
class FigureDistribution extends React.Component<ITodos , {}> {

      
  public render() {
	var ratio:number;
	var yaxis_title:string ;
	var titre_figure: string;
	if (this.props.unit == "euros"){
		ratio = 1
		yaxis_title='Montant héritage (€)'
		titre_figure="Distribution de l'héritage (1M = 1 million, 1k = 1000)"
	}
	else {
		ratio = smic_annuel
		yaxis_title='Montant héritage (années de SMIC)'
		titre_figure="Distribution de l'héritage"
	}
    var xvalue: number[] = [];
    var yvalue: number[] = [];
    var xvalue2: number[] = [];
    var yvalue2: number[] = [];
    var yvalue3: number[] = [];
    for (let heritage of this.props.hBrute){
        xvalue.push(heritage.x)
        yvalue.push(heritage.h/ratio)
    }    
    for (let heritage of this.props.hNet){
        xvalue2.push(heritage.x)
        yvalue2.push(heritage.h/ratio)
        yvalue3.push((heritage.h + this.props.hMut * (1. / this.props.ratioPartDeces - 1.))/ratio)
    }    
    return (
      <Plot
        data={[
          {
            x: xvalue,
            y: yvalue,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'},
            name: 'Distribution actuelle'
          },
//          {
//            x: xvalue2,
//            y: yvalue2,
//            type: 'scatter',
//            mode: 'lines',
//            marker: {color: 'green'},
//            name: "Distribution partiellement mutualisée <br> autant de parts que de décès"
//          },
          {
            x: xvalue2,
            y: yvalue3,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'blue'},
            name: "Distribution partiellement mutualisée" //<br> 1,5 fois plus de parts que de décès"
          }
            ]}
        style={{ width: '100%', height: '40%' }}
        layout={{
              autosize: true, title: titre_figure, 
              xaxis: {fixedrange: true, range: [0, 100], title: "pourcentage de la population <br>(classée de ceux qui recevront le plus petit héritage <br>à ceux qui recevront le plus gros)"},
              yaxis: {fixedrange: false, range: [0, 1400000/ratio],title: yaxis_title}
            }}
      />
    );
  }
}

export default FigureDistribution