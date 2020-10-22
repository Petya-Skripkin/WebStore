import React from 'react';

import { Content, QButton,  Question, Image, Conteiner, Delivery, Count, Button, Plus, Minus, Num } from './styles';

interface IProps {
  img: string;
  title: string;
  day: string;
  price: string;
  count: number;
  onPlus: () => void;
  onMinus: () => void;
  onOpenModalWindow: () => void;
}

const OuterWear = ({ img, title, day, price, count, onPlus, onMinus, onOpenModalWindow }: IProps) => {
  return (
    <Content>
      <QButton onClick={onOpenModalWindow}>
        <Question iconName="question" />
      </QButton>
      <Image src={img} alt="" />
      <Conteiner>
        <p>{title}</p>
        <Delivery>{day}</Delivery>
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