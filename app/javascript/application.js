import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./components/Greeting";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Greeting />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
