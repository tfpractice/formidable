import Grid from "material-ui/Grid";
import React from "react";
import { CardHeader } from "material-ui/Card";
import { connect } from "react-redux";

import UserForm from "../form/create";
import { AgeForm, ColorForm, MailForm, NameForm } from "../form/";

const App = props => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center">
        <Grid item xs={11}>
          <CardHeader
            title={`To get started, edit <code>src/App.js</code> and save to reload.
          `}
          />
        </Grid>
        <Grid item xs={11}>
          <NameForm />
          <ColorForm />
          <MailForm />
          <AgeForm />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

//
// const connected = connect(mapState, DogActions);

export default App;
