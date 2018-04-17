import Grid from "material-ui/Grid";
import Radio from "material-ui/Radio";
import React from "react";
import { FormControlLabel } from "material-ui/Form";

const RadioBase = ({ input, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={12}>
      <FormControlLabel
        type="radio"
        {...input}
        {...props}
        control={<Radio {...input} color="primary" />}
      />
    </Grid>
  </Grid>
);

export default RadioBase;
