import React from "react";
import { Switch } from "react-router-dom";
import { AboutUs } from "../../../pages/AboutUs";
import { Grid } from "../../../pages/Grid/Grid";
import { Home } from "../../../pages/Home";
import { Login } from "../../../pages/Login";
import { NotFound } from "../../../pages/NotFound";
import { Todo } from "../../../pages/Todo";
import { RouteWithHeader } from "./RouteWithHeader";
import { RouteWithoutHeader } from "./RouteWithoutHeader";

export function Routes() {
  return (
    <Switch>
      <RouteWithHeader exact path={["/", "/home"]}>
        <Home />
      </RouteWithHeader>

      <RouteWithHeader path="/about">
        <AboutUs />
      </RouteWithHeader>

      <RouteWithHeader path="/todo">
        <Todo />
      </RouteWithHeader>

      <RouteWithHeader path="/grid">
        <Grid />
      </RouteWithHeader>

      <RouteWithoutHeader path="/login">
        <Login />
      </RouteWithoutHeader>

      <RouteWithoutHeader path="*">
        <NotFound />
      </RouteWithoutHeader>
    </Switch>
  );
}
