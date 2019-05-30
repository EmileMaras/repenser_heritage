import * as React from "react";
import Plot from 'react-plotly.js';
import { IHeritage } from './types';

export interface ITodos{
    hBrute: Array<IHeritage>,
    hNet: Array<IHeritage>,
    hMut: number
}
class FigureDistribution extends React.Component<ITodos , {}> {

      
  public render() {
    var xvalue: number[] = [];
    var yvalue: number[] = [];
    var xvalue2: number[] = [];
    var yvalue2: number[] = [];
    var yvalue3: number[] = [];
    for (let heritage of this.props.hBrute){
        xvalue.push(heritage.x)
        yvalue.push(heritage.h)
    }    
    for (let heritage of this.props.hNet){
        xvalue2.push(heritage.x)
        yvalue2.push(heritage.h)
        yvalue3.push(heritage.h + this.props.hMut * (1. / 1.5 - 1.))
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
            x: xvalue2,
            y: yvalue2,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'green'},
            name: "Distribution partiellement mutualisée <br> autant de parts que de décès"
          },
          {
            x: xvalue2,
            y: yvalue3,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'blue'},
            name: "Distribution partiellement mutualisée <br> 1,5 fois plus de parts que de décès"
          }
            ]}
        style={{ width: '100%', height: '40%' }}
        layout={{
              autosize: true, title: "Distribution de l'héritage", 
              xaxis: {fixedrange: true, range: [0, 100]},
              yaxis: {fixedrange: false, range: [0, 2000000]}
            }}
      />
    );
  }
}

export default FigureDistribution