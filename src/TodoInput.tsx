import * as React from "react";

interface IProps {
  tranche: number;
  taux: number;
  handleChange: (tranche: number) => void;
  handleChangeTaux: (taux: number) => void;
  handleSubmit: () => void;
}

const TodoInput: React.SFC<IProps> = props => (
    <form>
    <label>Tranche</label>
    <input
      type="number"
      name="tranche"
      step="10000"
      value={props.tranche}
      onChange={e => props.handleChange(e.target.valueAsNumber)}
    /> 
    <label>Taux</label>
    <input
      type="number"
      name="taux"
      min="0"
      max="100"
      step="5"
      value={props.taux}
      onChange={e => props.handleChangeTaux(e.target.valueAsNumber)}
    />                 
    <button onClick={props.handleSubmit}>Ajouter</button>
    </form>
);

export default TodoInput;
