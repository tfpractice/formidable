import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import { Field } from "redux-form";

import { Form } from "../../utils";

const { ClearForm, TextField } = Form;

const PostBase = ({ handleSubmit, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          spacing={40}>
          <Grid item xs={11}>
            <Card>
              <CardHeader title="Age Form" />
              <CardContent>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center">
                  <Grid item xs={11} sm={4}>
                    <Field
                      name="age"
                      component={TextField}
                      placeholder="age"
                      label="age"
                    />
                  </Grid>
                  <Grid item xs={11} sm={4}>
                    <Field
                      name="height"
                      component={TextField}
                      placeholder="height"
                      label="height"
                    />
                  </Grid>
                  <Grid item xs={11} sm={4}>
                    <Field
                      name="weight"
                      component={TextField}
                      placeholder="weight"
                      label="weight"
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
                        {props.editing ? `Update` : `Submit`} Post
                      </Button>
                    </Text>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
);

export default ClearForm(PostBase);
