import ArrowBack from "@material-ui/icons/ArrowBack";

import ArrowForward from "@material-ui/icons/ArrowForward";

import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";
import React from "react";
import Text from "material-ui/Typography";
import { Field } from "redux-form";
import { MenuItem } from "material-ui/Menu";

import { AGES } from "./helper";
import { Form } from "../../utils";

const {
  WizForm, TextField, required, Radio, SelectList,
} = Form;

const PostBase = ({ handleSubmit, stepBack, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader title="Age Form" />
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={11} sm={4}>
                <Field
                  name="age"
                  component={SelectList}
                  placeholder="age"
                  label="age"
                  validate={[ required ]}
                >
                  {AGES.map(a => (
                    <MenuItem key={a} value={a}>
                      {a}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={11} sm={4}>
                <Field
                  name="height.ft"
                  component={SelectList}
                  placeholder="height"
                  label="height"
                  type="range"
                  info="in feet"
                  min={0}
                  max={10}
                  validate={[ required ]}
                >
                  {Array(10)
                    .fill(`x`)
                    .map((x, i) => i)
                    .map((a, i) => (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                </Field>
              </Grid>
              <Grid item xs={11} sm={4}>
                <Field
                  name="height.in"
                  component={SelectList}
                  placeholder="height"
                  label="height"
                  type="range"
                  info="in inches"
                  min={0}
                  max={12}
                  validate={[ required ]}
                >
                  {Array(12)
                    .fill(`x`)
                    .map((x, i) => i)
                    .map(i => (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                </Field>
              </Grid>
              <Grid item xs={12}>
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
              alignItems="center"
            >
              <Grid item>
                {props.prev && (
                  <Text component="div" align="center">
                    <Button variant="fab" color="secondary" onClick={stepBack}>
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
      </form>
    </Grid>
  </Grid>
);

export default WizForm(PostBase);
