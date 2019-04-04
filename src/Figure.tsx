import * as React from "react";
import Plot from 'react-plotly.js';
import { ITodo } from './types';

export interface ITodos{
    todoData: Array<ITodo>
}
class Figure extends React.Component<ITodos , {}> {

      
  public render() {
    var xvalue: number[] = [];
    var yvalue: number[] = [];
    for (let todo of this.props.todoData){
        xvalue.push(todo.tranche)
        yvalue.push(todo.taux)
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
              autosize: true, title: 'Taux de mutualisation'
            }}
      />
    );
  }
}

export default Figure