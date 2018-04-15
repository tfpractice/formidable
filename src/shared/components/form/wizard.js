import Grid from "material-ui/Grid";
import React from "react";

import Radio from "./radioGropu";
import { Form } from "../../utils";
import { withIndex } from "../wrappers";

const { WizForm } = Form;

const Wizard = props => {
  const {
    index, form, decIndex: stepBack, incIndex, prev, next,
  } = props;

  const onSubmit = next ? incIndex : props.onSubmit;

  const current = props.children[index];

  const through = {
    onSubmit,
    prev,
    stepBack,
    form,
    next,
  };

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        {current && <current.type {...current.props} {...through} />}
      </Grid>
      <Grid item xs={11}>
        <Radio />{` `}
      </Grid>
    </Grid>
  );
};

export default WizForm(withIndex(Wizard));
