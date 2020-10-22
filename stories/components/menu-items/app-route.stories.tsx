import React from 'react';
import Highlight from 'react-highlight';
import { BrowserRouter, Switch } from "react-router-dom";

import { storiesOf } from '@storybook/react';
import { CUSTOMER_MENU } from './mock';

import AppRoute from '../../../src/components/app-route';
import { urls } from '../../../src/constants';

const AppRouteDemo = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute
          name="Some name"
          menuItems={CUSTOMER_MENU}
          path={urls.HOME}
          component={() => <div>hello</div>}
        />
      </Switch>
    </BrowserRouter>
  )
}

storiesOf("Components/AppRoute", module).add(
  "AppRoute",
  () => (
    <div>
      <h1>Default</h1>
      <AppRouteDemo />
      <br />
      <br />
      <Highlight className="javascript">
        {`
          <AppRoute 
            name="Some name"
            menuItems= {CUSTOMER_MENU} 
            path= {urls.HOME} 
            component={() => <div>hello</div>} 
          />
        `}
      </Highlight>
    </div>
  ),
  {
    info: {
      propTables: [AppRoute],
      propTablesExclude: [Highlight, AppRouteDemo]
    }
  }
)