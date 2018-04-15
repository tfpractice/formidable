import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

import { BackBtn, NextBtn, SubmitBtn } from "./button";
import { Form } from "../../utils";
import { Users } from "../../store";

const {
  constants: { COLOR_OTHER, COLORS },
} = Users;

const {
  WizForm, TextField, required, Single, Radio,
} = Form;

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
                      component={Radio}
                      placeholder="color"
                      label="color"
                      type="radio"
                      validate={[ required ]}
                    >
                      <Grid
                        container
                        justify="center"
                        alignContent="center"
                        alignItems="center"
                      >
                        {COLORS.map(a => (
                          <Grid item key={a} xs={6} sm={3}>
                            <Field
                              name="color"
                              label={a}
                              type="radio"
                              component={Single}
                              value={a}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Field>
                    {props.formVals.color === COLOR_OTHER && (
                      <Grid item xs={11}>
                        <Field
                          name="color_other"
                          component={TextField}
                          placeholder="color"
                          label="color"
                        />
                      </Grid>
                    )}
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

const mapState = ({ form: { userWizard }}) => ({
  formVals: userWizard ? userWizard.values : { color: `` },
});

const connected = connect(mapState);

export default WizForm(connected(PostBase));
