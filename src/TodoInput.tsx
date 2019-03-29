import * as React from "react";

interface IProps {
  tranche: number;
  handleChange: (tranche: number) => void;
  handleSubmit: () => void;
}

const TodoInput: React.SFC<IProps> = props => (
  <div>
    <input
      type="number"
      value={props.tranche}
      onChange={e => props.handleChange(e.target.valueAsNumber)}
    />      
    <button onClick={props.handleSubmit}>Add</button>
  </div>
);

export default TodoInput;
