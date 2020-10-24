import React from 'react';

import { Content, QButton,  Question, Image, Conteiner, Title, Delivery, Count, Button, Plus, Minus, Num } from './styles';

interface IProps {
  picture: string;
  name: string;
  duration: number;
  price: string;
  onOpenModalWindow: () => void;
}

const OuterWear = ({ picture, name, duration, price, onOpenModalWindow }: IProps) => {
  const [count, setCount] = React.useState(0);

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
          <Button onClick={() => setCount(count)}><Plus iconName="plus" /></Button>
          <Num>{count}</Num>
          <Button onClick={() => setCount(count > 0 ? count - 1 : count)}><Minus iconName="minus" /></Button>
        </Count>
      </Conteiner>
    </Content>
  )
}

export default OuterWear;