import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import React from "react";

import { Form } from "../../utils";
import { withIndex } from "../wrappers";

const { WizForm } = Form;

const Wizard = props => {
  const {
    index, form, decIndex, incIndex, prev, next,
  } = props;

  const onSubmit = next ? incIndex : props.onSubmit;

  const current = props.children[index];

  const through = { onSubmit, prev, form, next };

  const stepBack = () => {
    // props.change(current.props.name, ``);
    decIndex();
  };

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item>
        {prev && (
          <Button size="small" onClick={stepBack}>
            Go Back
          </Button>
        )}
      </Grid>

      <Grid item xs={10}>
        {current && <current.type {...current.props} {...through} />}
      </Grid>
    </Grid>
  );
};

export default WizForm(withIndex(Wizard));
