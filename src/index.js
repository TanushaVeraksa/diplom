  
import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes";
import * as serviceWorker from "./serviceWorker.js";
import { Provider } from "react-redux";
import store from "./store";
import "./style.css"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();