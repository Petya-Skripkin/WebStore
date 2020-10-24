import React from 'react';

import { Content, Image, Title, Conteiner, Text } from './styles';

interface IProps {
  picture: string;
  name: string;
  description: string;
  onClick: () => void;
}

const OfficeWear = ({ picture, name, description, onClick }: IProps) => {
  return (
    <Content onClick={onClick}>
      <Image src={picture} alt="" />
      <Title>{name}</Title>
      <Conteiner>
        <Text>{description}</Text>
      </Conteiner>
    </Content>
  )
}

export default OfficeWear;