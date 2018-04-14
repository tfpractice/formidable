import { compose, withHandlers, withState } from "recompose";
import { connect } from "react-redux";

const withValues = compose(
  withState(`formVals`, `updateVals`, ({ formVals }) => ({ ...formVals })),
  withHandlers({
    setValues: ({ updateVals, formVals }) => newVals =>
      updateVals(x => {
        ({ ...x, ...newVals });
      }),
  })
);

export default withValues;

//
// const invert = fn => () => fn(x => !x);
//
const stateToProps = ({ form: { userWizard }}) => ({
  formVals: userWizard.values,
});
