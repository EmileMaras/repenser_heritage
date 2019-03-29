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
    <div className="half-container">
     
            
        <div className="flex-row">
            <div className="flex-large">
            <label>Limite haute de la tranche (€)</label>
            <input
              type="number"
              step="10000"
              value={props.tranche}
              onChange={e => props.handleChange(e.target.valueAsNumber)}
            />
            </div>
            <div className="flex-large">
            <label>Taux</label>
            <input
              type="number"
              min="0"
              max="100"
              step="5"
              value={props.taux}
              onChange={e => props.handleChangeTaux(e.target.valueAsNumber)}
            />
            </div>
        </div>    
        <div className="text-center">            
            <button onClick={props.handleSubmit}>Ajouter</button>
        </div>
        <div>{props.errormessage}</div>
    </div>
    

);

export default TodoInput;
