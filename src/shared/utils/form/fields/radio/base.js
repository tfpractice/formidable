import Grid from "material-ui/Grid";
import React from "react";
import { FormGroup, FormHelperText } from "material-ui/Form";

const RadioBase = ({ label, info, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={12}>
      <FormGroup row label={label} {...props} />
    </Grid>
    <Grid item xs={11}>
      {info && <FormHelperText>{info}</FormHelperText>}
    </Grid>
  </Grid>
);

export default RadioBase;
