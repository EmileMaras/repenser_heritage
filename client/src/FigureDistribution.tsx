import * as React from "react";
import Plot from 'react-plotly.js';
import { IHeritage } from './types';

export interface ITodos{
    hBrute: Array<IHeritage>,
    hNet: Array<IHeritage>,
    hMut: number,
    ratioPartDeces: number
}
class FigureDistribution extends React.Component<ITodos , {}> {

      
  public render() {
    var xvalue: number[] = [];
    var yvalue: number[] = [];
    var yvalue_in_smic: number[] = [];
    var xvalue2: number[] = [];
    var yvalue2: number[] = [];
    var yvalue3: number[] = [];
    for (let heritage of this.props.hBrute){
        xvalue.push(heritage.x)
        yvalue.push(heritage.h)
        yvalue_in_smic.push(heritage.h/14100)
    }    
    for (let heritage of this.props.hNet){
        xvalue2.push(heritage.x)
        yvalue2.push(heritage.h)
        yvalue3.push(heritage.h + this.props.hMut * (1. / this.props.ratioPartDeces - 1.))
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
          {
            x: xvalue,
            y: yvalue_in_smic,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'},
            name: 'foo',
            //showlegend: false,
            yaxis: 'y2'
          },
          {
            x: xvalue2,
            y: yvalue3,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'blue'},
            name: "Distribution partiellement mutualisée", //<br> 1,5 fois plus de parts que de décès"
            yaxis: 'y3'
          }
            ]}
        style={{ width: '100%', height: '40%' }}
        layout={{
              autosize: true, title: "Distribution de l'héritage", 
              xaxis: {fixedrange: true, range: [0, 100]},
              yaxis: {fixedrange: false, range: [0, 1400000], overlaying: 'y', title: 'Montant héritage (€)'},
              yaxis2: {fixedrange: false, range: [0, 1400000/14100], overlaying: 'y',title: 'Montant héritage (années de SMIC)',side: 'right'},
              yaxis3: {fixedrange: false, range: [0, 1400000], overlaying: 'y',title: 'Montant héritage (€)'}



            }
          }
      />
    );
  }
}

export default FigureDistribution