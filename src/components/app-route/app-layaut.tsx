import React from "react";

import AppHeader, { IMenu } from "./app-header/app-header";

import { LayoutContent } from "./styles";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  name: string;
  menuItems: IMenu[];
}

const AppLayout = ({ children, name, menuItems }: IProps) => (
  <div>
    <AppHeader name={name} menuItems={menuItems}/>
    <LayoutContent>{children}</LayoutContent>
  </div>
);

export default AppLayout;
