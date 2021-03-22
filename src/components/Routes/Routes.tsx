import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import PrivateRoute from "./PrivateRoutes";
import { authenticatedRoutes } from "./AuthenticatedRoutes";

const ApplicationRoutes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/menu" component={authenticatedRoutes} />
        <Route path="/auth" component={AuthRoutes} />
        <Redirect to="/auth" from="/" />
      </Switch>
    </Router>
  );
};

export default ApplicationRoutes;
