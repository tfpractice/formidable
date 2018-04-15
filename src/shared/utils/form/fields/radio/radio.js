import Grid from "material-ui/Grid";
import Input from "material-ui/Input";
import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "material-ui/Form";

import RadioBase from "./base";

const RadioBtn = ({ input, children, meta, ...rest }) =>
  console.log(`res`, rest) || (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <RadioBase {...input} {...rest}>
          {children}
        </RadioBase>
      </Grid>
      <Grid item xs={11}>
        {meta &&
          meta.touched &&
          ((meta.error && (
            <FormHelperText className="selectList-error error">
              {meta.error}
            </FormHelperText>
          )) ||
            (meta.warning && (
              <FormHelperText className="selectList-legend legend">
                {meta.warning}
              </FormHelperText>
            )))}
      </Grid>
    </Grid>
  );

export default RadioBtn;
