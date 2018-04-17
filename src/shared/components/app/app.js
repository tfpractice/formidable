import Grid from "material-ui/Grid";
import React from "react";
import { CardHeader } from "material-ui/Card";
import { connect } from "react-redux";

import Dialog from "../dialog";
import {
  AgeForm, ColorForm, MailForm, NameForm, WizardForm,
} from "../form/";
import { Users } from "../../store";
import { withSwitch, withValues } from "../wrappers";

const {
  operations: { emptyUser },
} = Users;

const App = ({
  setValues, open, stop, start, formVals, createUser,
}) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={11}>
          <CardHeader
            title="Welcome to Formidable"
            subheader="Please Create a new User"
          />
        </Grid>
        <Grid item xs={11}>
          <WizardForm
            onChange={setValues}
            initialValues={formVals}
            onSubmit={vals => {
              createUser(vals).then(start);
            }}
          >
            <NameForm />
            <MailForm />
            <AgeForm />
            <ColorForm />
          </WizardForm>
          <Grid item xs={11}>
            <Dialog open={open} stop={stop} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const mapState = ({ form: { userWizard }}) => ({
  formVals: userWizard ? userWizard.values : emptyUser(),
});

const connected = connect(mapState, Users.actions);

export default connected(withValues(withSwitch(App)));
