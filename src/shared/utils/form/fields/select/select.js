import Grid from "material-ui/Grid";
import Input from "material-ui/Input";
import React from "react";
import TextInput from "material-ui/TextField";
import { FormControl, FormHelperText } from "material-ui/Form";

import SelectBase from "./base";

const SelectList = ({
  input,
  className,
  children,
  meta: { touched, error, warning },
  ...rest
}) =>
  console.log(`rest, input`, rest, input) || (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <SelectBase inputProps={input} {...rest} {...input}>
          {children}
        </SelectBase>
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
