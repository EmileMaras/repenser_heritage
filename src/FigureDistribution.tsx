import * as React from "react";
import Plot from 'react-plotly.js';
import { IHeritage } from './types';

export interface ITodos{
    heritageBrute: Array<IHeritage>,
    heritageNet: Array<IHeritage>
}
class FigureDistribution extends React.Component<ITodos , {}> {

      
  public render() {
    var xvalue: number[] = [];
    var yvalue: number[] = [];
    var xvalue2: number[] = [];
    var yvalue2: number[] = [];

    for (let heritage of this.props.heritageBrute){
        xvalue.push(heritage.x)
        yvalue.push(heritage.h)
    }    
    for (let heritage of this.props.heritageNet){
        xvalue2.push(heritage.x)
        yvalue2.push(heritage.h)
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
          },
          {
            x: xvalue2,
            y: yvalue2,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'green'},
          }
            ]}
        style={{ width: '100%', height: '40%' }}
        layout={{
              autosize: true, title: "Distribution de l'héritage"
            }}
      />
    );
  }
}

export default FigureDistribution