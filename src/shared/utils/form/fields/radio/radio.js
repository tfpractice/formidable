import Grid from "material-ui/Grid";
import Input from "material-ui/Input";
import React from "react";

import RadioBase from "./base";

const RadioBtn = ({
  input,
  children,
  meta: { touched, error, warning },
  ...rest
}) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <RadioBase {...input} {...rest}>
        {touched &&
          ((error && <p className="radioField-error error"> {error}</p>) ||
            (warning && <p className="radioField-legend legend">{warning}</p>))}
      </RadioBase>
    </Grid>
  </Grid>
);

export default RadioBtn;
