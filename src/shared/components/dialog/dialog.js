import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Dialog, { DialogActions, DialogTitle } from "material-ui/Dialog";
import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import { connect } from "react-redux";

import { withSwitch } from "../wrappers";

const SubmissionDialog = ({ open, stop, formVals, ...props }) => (
  <Dialog open={open}>
    <Grid
      container
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid item xs={11}>
        {` `}
        <DialogTitle>{`Thanks for Submitting your a Form <3 ${
          formVals.firstName
        } ${formVals.lastName} `}</DialogTitle>
        <CardActions>
          <Button onClick={stop}>close</Button>
        </CardActions>
      </Grid>
      <Grid item xs={11}>
        <Card>
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={11}>
                <Text>{formVals.lastName} </Text>
                <Text>{formVals.age} </Text>
                <Text>
                  {formVals.height.ft} {formVals.height.in}
                </Text>
                <Text>{formVals.color} </Text>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button onClick={stop}>close</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Dialog>
);

const mapState = ({ form: { userWizard }}) => ({
  formVals: userWizard ? userWizard.values : {},
});

const connected = connect(mapState);

export default connected(SubmissionDialog);
