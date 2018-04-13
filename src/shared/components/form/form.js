import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import { Field } from "redux-form";

import { Form } from "../../utils";

const { ClearForm, TextField } = Form;

const PostBase = ({ handleSubmit, ...props }) => {
  const style = props.editing ? { backgroundColor: `#88f` } : {};

  const title = props.editing ? `Edit Post Form` : `New Post Form`;

  const url = props.editing ? `/posts/${props.post.id}` : `/posts`;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
            spacing={40}>
            <Grid item xs={11}>
              <Card>
                <CardHeader title={title} style={style} />
                <CardHeader
                  title={
                    <Grid
                      container
                      justify="center"
                      alignContent="center"
                      alignItems="center">
                      <Grid item xs={11} md={6}>
                        <Field
                          name="firstName"
                          component={TextField}
                          placeholder="firstName"
                          label="firstName"
                        />
                      </Grid>
                      <Grid item xs={11} md={6}>
                        <Field
                          name="lastName"
                          component={TextField}
                          placeholder="lastName"
                          label="lastName"
                        />
                      </Grid>
                      {` `}
                      <Grid item xs={11} md={6}>
                        <Field
                          name="email"
                          component={TextField}
                          placeholder="email"
                          label="email"
                        />
                      </Grid>

                      <Grid item xs={11} md={6}>
                        <Field
                          name="age"
                          component={TextField}
                          placeholder="age"
                          label="age"
                        />
                      </Grid>

                      <Grid item xs={11} md={6}>
                        <Field
                          name="height"
                          component={TextField}
                          placeholder="height"
                          label="height"
                        />
                      </Grid>
                      <Grid item xs={11} md={6}>
                        <Field
                          name="weight"
                          component={TextField}
                          placeholder="weight"
                          label="weight"
                        />
                      </Grid>
                      <Grid item xs={11} md={6}>
                        <Field
                          name="color"
                          component={TextField}
                          placeholder="color"
                          label="color"
                        />
                      </Grid>
                    </Grid>
                  }
                />
                <CardContent>
                  <Grid
                    container
                    justify="center"
                    alignContent="center"
                    alignItems="center">
                    <Grid item xs={11}>
                      <Text component="div" align="center">
                        <Field
                          name="message"
                          component={TextField}
                          placeholder="message"
                          label="message"
                          type="textarea"
                          fullWidth
                          multiline
                          rows={15}
                        />
                      </Text>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    justify="center"
                    alignContent="center"
                    alignItems="center">
                    <Grid item xs={11}>
                      <Text component="div" align="center">
                        <Button type="submit">
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
};

export default ClearForm(PostBase);
