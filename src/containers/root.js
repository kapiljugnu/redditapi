import React from "react";
import { Provider } from "react-redux";

import configureStore from "../configureStore";
import App from "./AsyncApp";

const store = configureStore();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
