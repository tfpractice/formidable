import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import { Field } from "redux-form";

import { BackBtn, NextBtn, SubmitBtn } from "./button";
import { Form } from "../../utils";

const { WizForm, TextField, isEmail } = Form;

const PostBase = ({ handleSubmit, stepBack, ...props }) => (
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
                      validate={[ isEmail ]}
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
                  spacing={40}
                >
                  <Grid item>
                    {props.prev && <BackBtn onClick={stepBack} />}
                  </Grid>
                  <Grid item>
                    {props.next ? (
                      <NextBtn onClick={handleSubmit} />
                    ) : (
                      <SubmitBtn onClick={handleSubmit} />
                    )}
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
