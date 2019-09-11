import * as React from "react";
import Plot from 'react-plotly.js';
import { IHeritage } from '../types';
import {heritageBruteData} from '../StateContainer';



class FigureDistributionBrute extends React.Component {
      
  public render() {      
    var xvalue: number[] = [];
    var yvalue: number[] = [];
    for (let heritage of heritageBruteData){
        xvalue.push(heritage.x)
        yvalue.push(heritage.h)
    }    
    xvalue.push(100)
    yvalue.push(16000000000)
    
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
          }

            ]}
        style={{ width: '50%', height: '40%' }}
        layout={{
              autosize: true, title: "Distribution de l'héritage", 
              xaxis: {fixedrange: true, range: [0, 100]},
              yaxis: {fixedrange: false, range: [0, 1400000],title: 'Montant héritage (€)'}
            }}
      />
    );
  }
}

export default FigureDistributionBrute
