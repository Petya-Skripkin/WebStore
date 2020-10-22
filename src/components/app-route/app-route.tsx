import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AppLayout from "./app-layaut";
import { IMenu } from "./app-header/app-header";

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  [props: string]: any;
  name: string;
  menuItems: IMenu[];
}

const AppRoute = ({
  component: Component,
  name,
  menuItems,
  ...rest
}: AppRouteProps) => (
  <Route
    {...rest}
    render={props => (
      <AppLayout name={name} menuItems={menuItems}>
        <Component {...props} />
      </AppLayout>
    )}
  />
)

export default AppRoute;