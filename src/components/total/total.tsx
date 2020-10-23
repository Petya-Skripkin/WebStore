import React from 'react';

import { Content, Paragraph, Things, Sum } from './styles';
import Button from '../button';

interface IProps {
  num: number;
  sum: number;
  onClick: () => void;
}

const Total = ({num,sum, onClick}: IProps) => {
  return (
    <Content>
      <Paragraph>ИТОГО</Paragraph>
      <Things>{num} вещи</Things>
      <Sum>{sum} тг</Sum>
      <Button onClick={onClick}>Оформить</Button>
    </Content>
  )
}

export default Total;