import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Redirect } from 'react-router';

import AppLayout from './app-layaut';
import { IMenu } from './app-header/app-header';
import authHelpers from 'helpers/auth';
import { urls } from '../../constants';

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
}: AppRouteProps) => {
  const [load, setLoad] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    async function auth() {
      const res = await authHelpers.checkauth();
      if(!res) {
        authHelpers.signout();
      }
      
      setIsAuthenticated(res);
      setLoad(false);
    }

    auth();
  }, [])

  if(load) {
    return <span>Loading...</span>;
  }

  if(!isAuthenticated) {
    return <Redirect to={{ pathname: urls.LOGIN }} />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <AppLayout name={name} menuItems={menuItems}>
          <Component {...props} />
        </AppLayout>
      )}
    />
  )
}

export default AppRoute;