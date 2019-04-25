import * as React from "react";

interface IProps {
  tranche: number;
  taux: number;
  handleChange: (tranche: number) => void;
  handleChangeTaux: (taux: number) => void;
  handleSubmit: () => void;
  errormessage: string;
}

const TodoInput: React.SFC<IProps> = props => (
    <div>
        <table>
          <thead>
          <tr>
            <th>Début tranche (€)</th>
            <th>Taux (%)</th>

          </tr>
        </thead>
        <tbody>        
        <tr>            
          <td>
            <input
              type="number"
              step="10000"
              value={props.tranche}
              onChange={e => props.handleChange(e.target.valueAsNumber)}
            />
           </td>
           <td> 
            <input
              type="number"
              min="0"
              max="100"
              step="5"
              value={props.taux}
              onChange={e => props.handleChangeTaux(e.target.valueAsNumber)}
            />
           </td>
           <td>
              <button 
                onClick={() => {props.handleSubmit()}}
              >Ajouter
              </button>
           </td>
        </tr>
        </tbody>
        </table>
        <div>{props.errormessage}</div>
    </div>
    

);

export default TodoInput;
