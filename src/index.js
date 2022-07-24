import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/CombineReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
