import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginContainer from "../Login/loginContainer";
import SignupContainer from "../Signup/SignupContainer";

export const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={LoginContainer} />
      <Route path="/auth/signup" component={SignupContainer} />
      <Redirect to="/auth/login" from="/auth" />
    </Switch>
  );
};
