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
      value={props.tranche}
      onChange={e => props.handleChange(e.target.valueAsNumber)}
    /> 
    <label>Taux</label>
    <input
      type="number"
      name="taux"
      value={props.taux}
      onChange={e => props.handleChangeTaux(e.target.valueAsNumber)}
    />                 
    <button onClick={props.handleSubmit}>Add</button>
    </form>
);

export default TodoInput;
