import React from 'react';

import { Content, QButton,  Question, Image, Conteiner, Title, Delivery, Count, Button, Plus, Minus, Num } from './styles';

interface IProps {
  picture: string;
  name: string;
  duration: number;
  price: string;
  count: number;
  onPlus: () => void;
  onMinus: () => void;
  onOpenModalWindow: () => void;
}

const OuterWear = ({ picture, name, duration, price, count, onPlus, onMinus, onOpenModalWindow }: IProps) => {
  return (
    <Content>
      <QButton onClick={onOpenModalWindow}>
        <Question iconName="question" />
      </QButton> 
      <Image src={picture} alt="" />
      <Conteiner>
        <Title>{name}</Title>
        <Delivery>{duration / 86400}</Delivery>
        <p>{price}</p>
        <Count>
          <Button onClick={onPlus}><Plus iconName="plus" /></Button>
          <Num>{count}</Num>
          <Button onClick={onMinus}><Minus iconName="minus" /></Button>
        </Count>
      </Conteiner>
    </Content>
  )
}

export default OuterWear;