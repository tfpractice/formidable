import Button from "material-ui/Button";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Dialog, { DialogTitle } from "material-ui/Dialog";
import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import { connect } from "react-redux";

const SubmissionDialog = ({ open, stop, formVals, ...props }) => (
  <Dialog open={open}>
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        {` `}
        <DialogTitle>{`Thanks for Submitting your a Form <3 ${
          formVals.firstName
        } ${formVals.lastName} `}</DialogTitle>
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
                <Text>email:{formVals.email} </Text>
                <Text>age: {formVals.age} </Text>
                <Text>
                  Height: {formVals.height.ft}' {formVals.height.in}"
                </Text>
                <Text>
                  favorite color:{formVals.color_other || formVals.color}
                  {` `}
                </Text>
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
