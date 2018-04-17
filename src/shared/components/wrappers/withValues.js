import { compose, withHandlers, withState } from "recompose";

const withValues = compose(
  withState(`formVals`, `updateVals`, ({ formVals }) => ({ ...formVals })),
  withHandlers({
    setValues: ({ updateVals }) => newVals => {
      updateVals(x => ({ ...x, ...newVals }));
    },
  })
);

export default withValues;
