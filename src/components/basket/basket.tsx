import React from 'react';

import { Content, LeftButton, RightButton, BIcon, Image, Conteiner, Delivery, Count, Button, Plus, Minus, Num } from './styles';

interface IProps {
  img: string;
  title: string;
  day: string;
  price: string;
  count: number;
  close: boolean;
  onPlus: () => void;
  onMinus: () => void;
  onOpenModalWindow: () => void;
  onClose: () => void;
}

const Basket = ({ img, title, day, price, count, close, onPlus, onMinus, onOpenModalWindow, onClose }: IProps) => {
  return (
    <Content close={close}>
      <LeftButton onClick={onOpenModalWindow}>
        <BIcon iconName="question" />
      </LeftButton>
      <RightButton onClick={onClose}>
        <BIcon iconName="close" />
      </RightButton>
      <Image src={img} alt="" />
      <Conteiner>
        <p>{title}</p>
        <Delivery>{day}</Delivery>
      </Conteiner>
      <Count>
        <Button onClick={onPlus}><Plus iconName="plus" /></Button>
        <Num>{count}</Num>
        <Button onClick={onMinus}><Minus iconName="minus" /></Button>
      </Count>
      <p>{price}</p>
    </Content>
  )
}

export default Basket;