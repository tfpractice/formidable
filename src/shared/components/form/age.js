import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import { Field } from "redux-form";
import { MenuItem } from "material-ui/Menu";

import { BackBtn, NextBtn, SubmitBtn } from "./button";
import { Form } from "../../utils";
import { Users } from "../../store";

const {
  constants: { AGES },
} = Users;

const {
  WizForm, TextField, isNum, required, Radio, Single, SelectList,
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
              <Grid item xs={11}>
                <Field
                  name="age"
                  component={Radio}
                  placeholder="age"
                  label="age"
                  validate={[ required ]}
                >
                  <Grid
                    container
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    {AGES.map(a => (
                      <Grid item key={a} xs={6} sm={3}>
                        <Field
                          label={a}
                          component={Single}
                          name="age"
                          value={a}
                          type="radio"
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Field>
              </Grid>
              <Grid item xs={11} sm={6}>
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
              <Grid item xs={11} sm={6}>
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
                  validate={[ isNum ]}
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

export default WizForm(PostBase);
