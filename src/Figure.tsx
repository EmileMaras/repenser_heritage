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
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
      />
    );
  }
}

export default Figure