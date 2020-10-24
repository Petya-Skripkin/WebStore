import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { AppRoute, ModalBox, Footer } from 'components/.';
import { urls } from 'constants/.';
import { CUSTOMER_MENU } from './mock';
import { Home, Login, Product } from './pages';
import { loadUser } from './api';
 
const App = () => {

  const [user, setUser] = React.useState('');

  React.useEffect(() => {
    const load = async () => {
      const user = await loadUser();
      setUser(user[0].username);
    };

    load();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <ModalBox 
            path={urls.LOGIN}
            Component={<Login />}
          />
          <AppRoute
            name={user}
            menuItems={CUSTOMER_MENU}
            path={`${urls.CATEGORIES}/:categoryId`}
            component={Product}
          />
          <AppRoute
            name={user}
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
