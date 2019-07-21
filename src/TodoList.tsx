import * as React from "react";
import { ITodo } from "./types";

export interface IProps {
  todos: Array<ITodo>;
  ratioPartDeces: number;
  handleDelete: (id: number) => void;
  handleRatioChange: (ratio: number) => void;
}


const TodoList: React.SFC<IProps> = props => {
   //var todosToSend: ITodos ;
   //todosToSend= {todoData: props.todos};
   return (
   <div>
    <div >
      <table>
           <col width="50%"/>
           <col width="25%"/>
           <col width="25%"/>
        <thead>
          <tr>
            <th>Début tranche (€)</th>
            <th>Taux (%)</th>
            <th>Enlever</th>
          </tr>
        </thead>
        <tbody>        
        {props.todos.map(todo => (
            <tr key={todo.id}>
                <td>{todo.tranche}</td>
                <td>{todo.taux}</td>
                <td> 
                    <button 
                        type="button" 
                        onClick={() => {props.handleDelete(todo.id)}}
                    >
                    Enlever
                    </button>
                </td>
            </tr>          
        ))}
        </tbody>
      </table>

    </div>
    <div>
      <table>
       <thead>
          <tr>  
           <th>
            Ratio entre le nombre de parts distribuées et le nombre de décès.
            <span 
             title="Afin de faire diminuer progressivement l'âge auquel 
les citoyens pourront toucher leur part d'héritage mutualisé, 
il est nécessaire de distribuer un nombre de parts d'héritage
plus grand que le nombre de décès"
            >
             En savoir plus.
            </span>
            </th>
          </tr>    
       </thead>  
       <tbody>      
        <input
              type="number"
              step="0.1"
              value={props.ratioPartDeces}
              onChange={e => props.handleRatioChange(e.target.valueAsNumber)}
              min="1"
              max="10"
              width="4"              
        />
       </tbody>          
      </table>
    </div>
   </div>
  );
};

export default TodoList;
