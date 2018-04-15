import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";

import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";
import React from "react";
import Text from "material-ui/Typography";
import { Field } from "redux-form";

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
                >
                  <Grid item>
                    {props.prev && (
                      <Text component="div" align="center">
                        <Button
                          variant="fab"
                          color="secondary"
                          onClick={stepBack}
                        >
                          <Icon>
                            <ArrowBack />
                          </Icon>
                        </Button>
                      </Text>
                    )}
                  </Grid>
                  <Grid item>
                    <Text component="div" align="center">
                      <Button variant="fab" type="submit">
                        {props.next ? (
                          <Icon>
                            <ArrowForward />
                          </Icon>
                        ) : (
                          `Submit`
                        )}
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
