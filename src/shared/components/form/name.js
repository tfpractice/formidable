import ArrowBack from "@material-ui/icons/ArrowBack";
import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";
import React from "react";
import Text from "material-ui/Typography";
import { Field } from "redux-form";

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
            >
              <Grid item xs={6}>
                {props.prev && (
                  <Text component="div" align="center">
                    <Button variant="fab" onClick={stepBack}>
                      <Icon>
                        <ArrowBack />
                      </Icon>
                    </Button>
                  </Text>
                )}
              </Grid>
              <Grid item xs={6}>
                <Text component="div" align="center">
                  <Button type="submit">Submit Name</Button>
                </Text>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </Grid>
  </Grid>
);

export default WizForm(NameBase);
