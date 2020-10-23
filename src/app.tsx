import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";

import { AppRoute } from 'components/.'
import { urls } from 'constants/.';
import { CUSTOMER_MENU } from './mock';
// import { Home } from './pages';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <AppRoute
            name="Some name"
            menuItems={CUSTOMER_MENU}
            path={urls.HOME}
            component={() => <></>}
          />
        </Switch>
      </BrowserRouter>
      {/* <Home /> */}
    </>
  );
};

export default App;
