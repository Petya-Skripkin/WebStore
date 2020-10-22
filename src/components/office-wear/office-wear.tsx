import React from 'react';

import { Content, Image, Title, Conteiner, Link, Button } from './styles';

interface IMenu {
  link: string;
  title: string;
}

interface IProps {
  image: string;
  title: string;
  menu: IMenu[];
  onClick: () => void;
}

const OfficeWear = ({ image, title, menu, onClick }: IProps) => {
  return (
    <Content>
      <Image src={image} alt="" />
      <Title>{title}</Title>
      <Conteiner>
        {menu.map(item => (
          <Link href={item.link}>{item.title}</Link>
        ))
        }
        <Button onClick={onClick}>...</Button>
      </Conteiner>
    </Content>
  )
}

export default OfficeWear;