import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardContainer from "../Dashboard/Dashboard";

export const authenticatedRoutes = () => {
  return (
    <Switch>
      <Route exact path="/menu" component={DashboardContainer} />
    </Switch>
  );
};
