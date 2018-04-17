import React from "react";
import { compose, withHandlers, withState } from "recompose";

const switchState = withState(`open`, `setSwitch`, ({ open }) => open || false);

const switchHandlers = withHandlers({
  toggle: ({ setSwitch }) => () => setSwitch(x => !x),
  start: ({ setSwitch }) => () => setSwitch(true),
  stop: ({ setSwitch }) => () => setSwitch(false),
});

export default compose(switchState, switchHandlers);
