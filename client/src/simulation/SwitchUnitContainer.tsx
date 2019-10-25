import * as React from "react";

import { StateConsumer } from "../StateContainer";
import SwitchUnit from "./SwitchUnit";

export default () => (
  <StateConsumer>
    {({ state, actions }) => (
      <SwitchUnit
        unit={state.unit}
        updateUnit={actions.updateUnit}
      />
    )}
  </StateConsumer>
);