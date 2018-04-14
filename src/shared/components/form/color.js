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
              <CardHeader title="Color Form" />
              <CardContent>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item xs={11}>
                    <Field
                      name="color"
                      component={TextField}
                      placeholder="color"
                      label="color"
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
                      <Button type="submit" onClick={handleSubmit}>
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

export default WizForm(PostBase);
