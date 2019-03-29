import * as React from "react";

interface IProps {
  tranche: number;
  taux: number;
  handleChange: (tranche: number) => void;
  handleChangeTaux: (taux: number) => void;
  handleSubmit: () => void;
}

const TodoInput: React.SFC<IProps> = props => (
  <div>
    <input
      type="number"
      value={props.tranche}
      onChange={e => props.handleChange(e.target.valueAsNumber)}
    /> 
    <input
      type="number"
      value={props.taux}
      onChange={e => props.handleChangeTaux(e.target.valueAsNumber)}
    />                 
    <button onClick={props.handleSubmit}>Add</button>
  </div>
);

export default TodoInput;
