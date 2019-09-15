import * as React from "react";
import Plot from 'react-plotly.js';
import { ITodo } from './types';

export interface ITodos{
    todoData: Array<ITodo>,
    heritageMutualiseTotal: number,
    ratioPartDeces: number
}
class Figure extends React.Component<ITodos , {}> {

      
    
  public render() {
    var xvalue: number[] = [0];
    var yvalue: number[] = [0];
    var yvalue2: number[] = [this.props.heritageMutualiseTotal / this.props.ratioPartDeces];
    var contribution: number = 0;
    var itranche: number = 0;
    const taux: Array<number> = [];
    const tranches: Array<number> = [];
    for (let todo of this.props.todoData){
        taux.push(todo.taux)
        tranches.push(todo.tranche)
    }
    const xMax: number = Math.max(2000000, 2 * tranches[tranches.length - 1]);
    itranche = 0;
    contribution = 0;
    var tauxPrec: number = 0;
    var tranchePrec: number = 0;
    for (let tr of tranches){
        contribution += tauxPrec / 100 * (tr - tranchePrec)
        tauxPrec = taux[itranche];
        tranchePrec = tr;
        itranche += 1;
        xvalue.push(tr)
        yvalue.push(tr - contribution)
        yvalue2.push(tr - contribution + this.props.heritageMutualiseTotal / this.props.ratioPartDeces)
    }
    xvalue.push(xMax)
    contribution += tauxPrec / 100 * (xMax - tranchePrec)
    yvalue.push(xMax - contribution)
    yvalue2.push(xMax - contribution + this.props.heritageMutualiseTotal / this.props.ratioPartDeces)
    return (
      <Plot
        data={[
          {
            x: xvalue,
            y: yvalue2,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'blue'},
            name: "Héritage net total <br> (filial + mutualisé)"
          },    
          {
            x: xvalue,
            y: yvalue,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'black'},
            name: "Héritage filial net" 
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

export default Figure