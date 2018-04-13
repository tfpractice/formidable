import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import React from "react";
import Text from "material-ui/Typography";
import { connect } from "react-redux";

const App = props => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center">
        <Grid item xs={11}>
          <div className="App">
            <header className="App-header">
              <Text>Welcome to React</Text>
            </header>
            <Text>
              To get started, edit <code>src/App.js</code> and save to reload.
            </Text>
          </div>
          <Button> local DOGS</Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

//
// const connected = connect(mapState, DogActions);

export default App;
