import Grid from "material-ui/Grid";
import React from "react";
import { connect } from "react-redux";

import ReduxUser from "./form";
import { Users } from "../../store";

const { operations: sameID } = Users;

const EditForm = ({ updateUser, user }) => {
  const a = 0;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxUser
          form="editUser"
          initialValues={user}
          editing
          user={user}
          onSubmit={updateUser}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ users }, { user, ...own }) => ({ user });

export default connect(mapState, Users.actions)(EditForm);
