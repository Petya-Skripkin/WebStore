import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { AppRoute, ModalBox, Footer } from 'components/.';
import { urls } from 'constants/.';
import { CUSTOMER_MENU } from './mock';
import { Login, Home } from 'pages/.';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <ModalBox 
            path={urls.LOGIN}
            Component={<Login />}
          />
          <AppRoute
            name="Some name"
            menuItems={CUSTOMER_MENU}
            path={urls.HOME}
            component={Home}
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
