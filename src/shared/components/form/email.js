import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import { Field } from "redux-form";

import { Form } from "../../utils";

const { WizForm, TextField } = Form;

const PostBase = ({ handleSubmit, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          spacing={40}
        >
          <Grid item xs={11}>
            <Card>
              <CardHeader title="Email Form" />
              <CardContent>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item xs={11}>
                    <Field
                      name="email"
                      component={TextField}
                      placeholder="email"
                      label="email"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item xs={11}>
                    <Text component="div" align="center">
                      <Button type="submit">
                        {props.editing ? `Update` : `Submit`} Email
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

export default WizForm(PostBase);
