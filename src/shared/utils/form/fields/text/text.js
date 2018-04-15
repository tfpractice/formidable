import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import TextInput from "material-ui/TextField";

const TextField = ({
  input,
  meta: { asyncValidating, touched, error },
  ...rest
}) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11} className={asyncValidating ? `async-validating` : ``}>
      <TextInput inputProps={input} fullWidth {...input} {...rest} />
    </Grid>
    <Grid item xs={11}>
      {touched && error && <Text align="center">{error}</Text>}
    </Grid>
  </Grid>
);

export default TextField;
