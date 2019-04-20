import * as React from "react";
import Plot from 'react-plotly.js';
import { IHeritage } from './types';

export interface ITodos{
    heritageBrute: Array<IHeritage>
}
class FigureDistribution extends React.Component<ITodos , {}> {

      
  public render() {
    var xvalue: number[] = [];
    var yvalue: number[] = [];
    for (let heritage of this.props.heritageBrute){
        xvalue.push(heritage.x)
        yvalue.push(heritage.h)
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
          }
        ]}
        style={{ width: '100%', height: '40%' }}
        layout={{
              autosize: true, title: 'Montant herité VS montant héritage filial brut'
            }}
      />
    );
  }
}

export default FigureDistribution