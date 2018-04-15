import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { MenuItem } from "material-ui/Menu";

import { BackBtn, NextBtn, SubmitBtn } from "./button";
import { Form } from "../../utils";
import { Users } from "../../store";

const {
  constants: { COLOR_OTHER, COLORS },
} = Users;

const { WizForm, TextField, SelectList } = Form;

const PostBase = ({ handleSubmit, stepBack, ...props }) => {
  const a = 0;

  return (
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
                        component={SelectList}
                        placeholder="color"
                        label="color"
                      >
                        {COLORS.map(a => (
                          <MenuItem key={a} value={a}>
                            {a}
                          </MenuItem>
                        ))}
                      </Field>
                      {props.formVals.color === COLOR_OTHER && (
                        <Field
                          name="color_other"
                          component={TextField}
                          placeholder="color"
                          label="color"
                        />
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
};

const mapState = ({ form: { userWizard }}) => ({
  formVals: userWizard ? userWizard.values : { color: `` },
});

const connected = connect(mapState);

export default WizForm(connected(PostBase));
