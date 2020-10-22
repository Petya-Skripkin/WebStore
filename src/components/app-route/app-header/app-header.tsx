import React from "react";
import { useHistory } from "react-router-dom";
import _get from "lodash/get";

import { urls } from "../../../constants";

import {
  MainContainer,
  Menu,
  Item,
  MenuLink,
} from "./styles";

export interface IMenu {
  link: string;
  title: string;
  isActive?: boolean;
}

interface IHeader {
  name: string;
  menuItems: IMenu[];
}

const AppHeader = ({ menuItems }: IHeader) => {
  const history = useHistory();
  const path = _get(history, "location.pathname", "/");

  const [burgerMenuOpen, setBurgerMenuOpen] = React.useState(false);

  return (
    <MainContainer>
      <Menu>
        {menuItems.map(item =>
          <Item key={item.title}>
            <MenuLink
              to={item.link}
              isActive={
                path === item.link ||
                (path.includes(item.link) && item.link !== urls.HOME)
              } onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>{item.title}</MenuLink>
          </Item>
        )}
      </Menu>
    </MainContainer>
  );
};

export default AppHeader;