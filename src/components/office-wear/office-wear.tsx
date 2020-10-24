import React from 'react';

import { Content, Image, Title, Conteiner, Text } from './styles';

interface IMenu {
  title: string;
  description: string;
}

interface IProps {
  picture: string;
  name: string;
  hint: IMenu;
}

const OfficeWear = ({ picture, name, hint }: IProps) => {
  return (
    <Content>
      <Image src={picture} alt="" />
      <Title>{name}</Title>
      <Conteiner>
        <Text>{hint.title}</Text>
        <Text>{hint.description}</Text>
      </Conteiner>
    </Content>
  )
}

export default OfficeWear;