import Grid from "material-ui/Grid";
import Input, { InputLabel } from "material-ui/Input";
import Radio, { RadioGroup } from "material-ui/Radio";
import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "material-ui/Form";

const RadioBase = ({ label, info, children, ...props }) => {
  const { name, onChange, onValue } = props;

  const pass = { name, onChange, onValue };

  console.log(`RDIOBASEprops`, props);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      {/* <Grid item xs={11}>
        <InputLabel htmlFor={props.name}>{label}</InputLabel>
      </Grid> */}
      <Grid item xs={11}>
        <RadioGroup aria-label={label} type="radio" {...pass}>
          {children}
        </RadioGroup>
        {info && <FormHelperText>{info}</FormHelperText>}
      </Grid>
    </Grid>
  );
};

export default RadioBase;
