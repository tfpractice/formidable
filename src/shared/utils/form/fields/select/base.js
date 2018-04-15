import Grid from "material-ui/Grid";
import Input, { InputLabel } from "material-ui/Input";
import React from "react";
import Select from "material-ui/Select";
import { FormHelperText } from "material-ui/Form";

const SelectBase = ({ label, info, children, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <InputLabel htmlFor={props.name}>{label}</InputLabel>
    </Grid>
    <Grid item xs={11}>
      <Select {...props} fullWidth type="select">
        {children}
      </Select>
    </Grid>
    <Grid item xs={11}>
      {info && <FormHelperText>{info}</FormHelperText>}
    </Grid>
  </Grid>
);

export default SelectBase;
