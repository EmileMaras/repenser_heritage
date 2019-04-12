import * as React from "react";
import Plot from 'react-plotly.js';
import { ITodo } from './types';

export interface ITodos{
    todoData: Array<ITodo>
}
class Figure extends React.Component<ITodos , {}> {

      
  public render() {
    var xvalue: number[] = [0];
    var yvalue: number[] = [0];
    var contribution: number = 0;
    var itranche: number = 0;
    var trancheNext: number;
    var xlast: number, tranche: number;
    const xMax: number = 2000000;
    const taux: Array<number> = this.props.todoData.taux;
    const tranches: Array<number> = this.props.todoData.tranche;
    tranches.push(10000000000000)
  while (xvalue[xvalue.length-1] < xMax){
        if (xvalue[xvalue.length-1]>1000000) {
            xvalue.push(xvalue[xvalue.length-1]+1000)
        }
        else {
            xvalue.push(xvalue[xvalue.length-1]*1.02) 
        }
    }
    itranche = 0;
    contribution = 0;
    xlast=xvalue[xvalue.length-1];
    for (let t of taux){
        tranche = tranches[itranche]
        trancheNext = tranches[itranche+1]
        if (xlast < t){
            break
        }
        else {
            contribution += (Math.min(xlast,trancheNext) - tranche)*t/100
            
        }
    }
    yvalue.push(xlast-contribution)
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
              autosize: true, title: 'Taux de mutualisation'
            }}
      />
    );
  }
}

export default Figure