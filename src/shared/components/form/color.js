import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";

import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";
import React from "react";
import Text from "material-ui/Typography";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { MenuItem } from "material-ui/Menu";

import { Form } from "../../utils";
import { Users } from "../../store";

const {
  constants: { COLOR_OTHER, COLORS },
} = Users;

const { WizForm, TextField, SelectList } = Form;

const PostBase = ({ handleSubmit, stepBack, ...props }) => {
  console.log(`props`, props);

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
                        {` `}
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
                        <Button
                          variant="fab"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          {props.next ? (
                            <Icon>
                              <ArrowForward />
                            </Icon>
                          ) : (
                            `Submit`
                          )}
                          {` `}
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
};

const mapState = ({ form: { userWizard }}) => ({
  formVals: userWizard ? userWizard.values : { color: `` },
});

const connected = connect(mapState);

export default WizForm(connected(PostBase));
