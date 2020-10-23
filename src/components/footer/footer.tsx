import React from 'react';

import { Content, Logo, IconContent, Link, SIcon } from './styles';

interface SIcon {
  link: string;
  iconName: string;
}

interface IProps {
  logo: string;
  sotialNetwork: SIcon[];
  num: string;
}

const Footer = ({logo, sotialNetwork, num}: IProps) => {
  return (
    <Content>
      <Logo src={logo} />
      <IconContent> 
        {sotialNetwork.map(item => (
        <Link href= {item.link}>
          <SIcon src={item.iconName} />
        </Link>
        ))} 
      </IconContent>
      {num}
    </Content>
  )
} 

export default Footer;