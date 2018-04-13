import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import React from "react";
import { reduxForm } from "redux-form";

import { withIndex } from "../wrappers";

const Wizard = props => {
  const {
    index, form, goBack, hasPrev: prev, hasNext: next,
  } = props;

  const onSubmit = next ? props.advance : props.onSubmit;

  const current = props.children[index];

  const through = { onSubmit, prev, form, next };

  const stepBack = () => {
    // props.change(current.props.name, ``);
    goBack();
  };

  console.log(`Wizprops`, props);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={3}>
        {prev && (
          <Button size="small" onClick={stepBack}>
            Go Back
          </Button>
        )}
      </Grid>

      <Grid item xs={8}>
        {current && <current.type {...current.props} {...through} />}
      </Grid>
    </Grid>
  );
};

const wizForm = reduxForm({
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
});

export default wizForm(withIndex(Wizard));
