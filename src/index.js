import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import amplify from "aws-amplify";
import config from "./aws-exports";
import AppRoute from "./route";
import AuthContextProvider from "./context/context";

amplify.configure(config);
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppRoute />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
