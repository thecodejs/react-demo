import React from "react";
import { Route } from "react-router-dom";
import { WithHeader } from "../layouts/WithHeader";

export function RouteWithHeader({ children, ...rest }) {
    return (
        <Route {...rest}>
            <WithHeader>{children}</WithHeader>
        </Route>
    )
}
