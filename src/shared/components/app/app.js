import Grid from "material-ui/Grid";
import React from "react";
import { CardHeader } from "material-ui/Card";
import { connect } from "react-redux";

import {
  AgeForm, ColorForm, MailForm, NameForm, WizardForm,
} from "../form/";
import { Users } from "../../store";
import { withValues } from "../wrappers";

const App = props => {
  console.log(`props.formVals`, props.formVals);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center">
          <Grid item xs={11}>
            <CardHeader title="Creat a User" />
          </Grid>
          <Grid item xs={11}>
            <WizardForm
              form="userWizard"
              onChange={vals => {
                console.log(`onChange vals`, vals);
                props.setValues(vals);
              }}
              initialValues={props.formVals}
              onSubmit={vals => {
                console.log(`vals`, vals);
                props.createUser(vals);
              }}>
              <NameForm />
              <MailForm />
              <AgeForm />
              <ColorForm />
            </WizardForm>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

//
const connected = connect(null, Users.actions);

export default connected(withValues(App));
