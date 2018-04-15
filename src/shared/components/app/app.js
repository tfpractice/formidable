import Grid from "material-ui/Grid";
import React from "react";
import { CardHeader } from "material-ui/Card";
import { connect } from "react-redux";

import {
  AgeForm, ColorForm, MailForm, NameForm, WizardForm,
} from "../form/";
import { Users } from "../../store";
import { withValues } from "../wrappers";

const {
  operations: { user },
} = Users;

const App = props => {
  console.log(`App.formVals`, props.formVals);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <CardHeader title="Creat a User" />
          </Grid>
          <Grid item xs={11}>
            <WizardForm
              onChange={vals => {
                console.log(`onChange vals`, vals);
                props.setValues(vals);
              }}
              initialValues={props.formVals}
              onSubmit={vals => {
                console.log(`vals`, vals);
                props.createUser(vals);
              }}
            >
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

const mapState = ({ form: { userWizard }}) => ({
  formVals: userWizard ? userWizard.values : user(),
});

const connected = connect(mapState, Users.actions);

export default connected(withValues(App));
