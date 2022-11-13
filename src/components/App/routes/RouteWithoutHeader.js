import React from "react";
import { Route } from "react-router-dom";
import { WithoutHeader } from "../layouts/WithoutHeader";

export function RouteWithoutHeader({ children, ...rest }) {
    return (
        <Route {...rest}>
            <WithoutHeader>{children}</WithoutHeader>
        </Route>
    )
}
