import ArrowBack from "@material-ui/icons/ArrowBack";

import ArrowForward from "@material-ui/icons/ArrowForward";

import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";
import React from "react";
import Text from "material-ui/Typography";

export const BackBtn = props => (
  <Text component="div" align="center">
    <Button variant="fab" color="secondary" {...props}>
      <Icon>
        <ArrowBack />
      </Icon>
    </Button>
  </Text>
);

export const NextBtn = props => (
  <Text component="div" align="center">
    <Button variant="fab" color="secondary" {...props}>
      <Icon>
        <ArrowForward />
      </Icon>
    </Button>
  </Text>
);

export const SubmitBtn = props => (
  <Text component="div" align="center">
    <Button variant="raised" color="secondary" {...props}>
      Submit
    </Button>
  </Text>
);
