import Grid from "material-ui/Grid";
import React from "react";
import { FormHelperText } from "material-ui/Form";

import SelectBase from "./base";

const SelectList = ({ input, meta: { touched, error, warning }, ...rest }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <SelectBase inputProps={input} {...rest} {...input} />
    </Grid>
    <Grid item xs={11}>
      {touched &&
        ((error && (
          <FormHelperText className="selectList-error error">
            {error}
          </FormHelperText>
        )) ||
          (warning && (
            <FormHelperText className="selectList-legend legend">
              {warning}
            </FormHelperText>
          )))}
    </Grid>
  </Grid>
);

export default SelectList;
