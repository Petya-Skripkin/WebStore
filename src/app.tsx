import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";

import { AppRoute, Footer } from 'components/.'
import { urls } from 'constants/.';
import { CUSTOMER_MENU } from './mock';
import { Home } from './pages';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <AppRoute
            name="Some name"
            menuItems={CUSTOMER_MENU}
            path={urls.HOME}
            component={() => <Home />}
          />
        </Switch>
      </BrowserRouter>

      <Footer
        logo="./recents.png"
        sotialNetwork={[
          {
            link: "#",
            iconName: "./WhatsApp.png"
          }
        ]}
        num="+7 (708) 380 - 70 - 09"
      />
      {/* /categories
      /categories/wear */}
    </>
  );
};

export default App;
