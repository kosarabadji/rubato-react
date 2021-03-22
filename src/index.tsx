import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import App from "./components/App/App";
import { AuthProvider } from "./AuthProvider";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
