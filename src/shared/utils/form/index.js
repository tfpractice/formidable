import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import TextInput from "material-ui/TextField";
import { reduxForm } from "redux-form";

export * from "./fields";

export * from "./validate";

export const resetSuccess = (res, dispatch, { reset }) => reset();

const onSubmitSuccess = resetSuccess;

const enableReinitialize = true;

export const WizForm = form =>
  reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    form: `userWizard`,
  })(form);

export const ClearForm = form =>
  reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize,
    form: `userWizard`,
  })(form);

export const TextField = props => {
  const {
    input,
    meta: { asyncValidating, touched, error },
    ...rest
  } = props;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11} className={asyncValidating ? `async-validating` : ``}>
        <TextInput inputProps={input} fullWidth {...input} {...rest} />
      </Grid>
      <Grid item xs={11}>
        {touched && error && <Text align="center">{error}</Text>}
      </Grid>
    </Grid>
  );
};
