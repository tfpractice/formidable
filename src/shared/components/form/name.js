import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import { Field } from "redux-form";

import { BackBtn, NextBtn, SubmitBtn } from "./button";
import { Form } from "../../utils";

const { WizForm, required, TextField } = Form;

const NameBase = ({ handleSubmit, stepBack, ...props }) => (
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
              alignItems="center"
            >
              <Grid item xs={11} sm={6}>
                <Field
                  name="firstName"
                  component={TextField}
                  placeholder="firstName"
                  label="firstName"
                  validate={[ required ]}
                />
              </Grid>
              <Grid item xs={11} sm={6}>
                <Field
                  name="lastName"
                  component={TextField}
                  placeholder="lastName"
                  label="lastName"
                  validate={[ required ]}
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
              <Grid item>{props.prev && <BackBtn onClick={stepBack} />}</Grid>
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
      </form>
    </Grid>
  </Grid>
);

export default WizForm(NameBase);
