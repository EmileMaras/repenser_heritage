import * as React from "react";
import Plot from 'react-plotly.js';
import { IHeritage } from '../types';
import {heritageBruteData, initialTodos, updateHeritage, IReturn, ratioPartDecesIni } from '../StateContainer';

class FigureDistribution extends React.Component {

      
  public render() {
    var ret: IReturn = updateHeritage(initialTodos, heritageBruteData)
    var heritageNet:IHeritage[] =  ret.heritageNet
    var heritageMutualiseTotal: number = ret.heritageMutualiseTotal
    var xvalue: number[] = [];
    var yvalue: number[] = [];
    var xvalue2: number[] = [];
    var yvalue2: number[] = [];
      
    for (let heritage of heritageBruteData){
        xvalue.push(heritage.x)
        yvalue.push(heritage.h)
    }    
    xvalue.push(100)
    yvalue.push(16000000000)

    for (let heritage of heritageNet){
        xvalue2.push(heritage.x)
        yvalue2.push(heritage.h  + heritageMutualiseTotal * (1. / ratioPartDecesIni  - 1.))
    }    
      
    //xvalue2.push(100)
    //yvalue2.push(16000000000.*(100-initialTodos[-1].taux)/100)
      
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
            marker: {color: 'blue'},
            name: "Distribution avec une mutualisation" //<br> 1,5 fois plus de parts que de décès"
          }        

            ]}
        style={{ width: '75%', height: '40%' }}
        layout={{
              autosize: true, title: "Distribution de l'héritage", 
              xaxis: {fixedrange: true, range: [0, 100]},
              yaxis: {fixedrange: false, range: [0, 1400000],title: 'Montant héritage (€)'}
            }}
      />
    );
  }
}

export default FigureDistribution
