import Grid from "material-ui/Grid";
import React from "react";
import uid from "uid";
import { connect } from "react-redux";

import ReduxUser from "./form";
import { Users } from "../../store";

const CreatForm = ({ createUser, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <ReduxUser
        form="createUser"
        editing={false}
        initialValues={props.user}
        onSubmit={createUser}
      />
    </Grid>
  </Grid>
);

const mapState = ({ users }) => ({ user: { id: users.length }});

export default connect(mapState, Users.actions)(CreatForm);
