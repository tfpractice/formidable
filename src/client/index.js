import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { Provider } from "react-redux";
import { render } from "react-dom";

import getStore, { Users } from "../shared/store";
import Main from "../shared/components";
import { Theme } from "../shared/utils";

const {
  actions: { getUsers },
} = Users;

const store = getStore();

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={Theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>
);

store.dispatch(getUsers());

window.getState = store.getState;
render(<App store={store} />, document.getElementById(`root`));
