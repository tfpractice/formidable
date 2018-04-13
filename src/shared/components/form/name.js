import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import { Field } from "redux-form";

import { Form } from "../../utils";

const { ClearForm, TextField } = Form;

const NameBase = ({ handleSubmit, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader title="Name Form" />
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center">
              <Grid item xs={11} md={6}>
                <Field
                  name="firstName"
                  component={TextField}
                  placeholder="firstName"
                  label="firstName"
                />
              </Grid>
              <Grid item xs={11} md={6}>
                <Field
                  name="lastName"
                  component={TextField}
                  placeholder="lastName"
                  label="lastName"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center">
              <Grid item xs={11}>
                <Text component="div" align="center">
                  <Button type="submit">
                    {props.editing ? `Update` : `Submit`} Name
                  </Button>
                </Text>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </Grid>
  </Grid>
);

export default ClearForm(NameBase);
