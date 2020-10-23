import styled, {css} from "styled-components";

import Icon from "../icon";

import { colors } from "../../constants";

export const Content = styled.div<{close: boolean}>`
  position: relative;
  display: flex; 
  justify-content: space-around;
  align-items: center;

  ${({close}) => (
    close && css`
      display: none;
    `
  )};
`;

export const LeftButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  border-radius: 8px 0;
  background: ${colors.lightgray};
  outline: none;
  cursor: pointer;
`;

export const RightButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 0 8px;
  background: ${colors.lightgray};
  outline: none;
  cursor: pointer;
`;

export const BIcon = styled(Icon)`
  height: 25px;
  padding: 8px 7px;
  color: ${colors.grey};
  fill: transparent;
`;

export const Image = styled.img`
  height: 187px;
`;

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.lightblack};
`;

export const Delivery = styled.p`
  color: ${colors.lightblack};

  &::before {
    content: "Срок доставки / ";
    color: ${colors.grey};
  }
`;

export const Count = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.lightblack};
`;

export const Button = styled.button`
  border: none;
  border-radius: 50%;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const Plus = styled(Icon)`
  height: 31px;
  fill: transparent;
`;

export const Minus = styled(Icon)`
  height: 31px;
  fill: transparent;
`;

export const Num = styled.p`
  margin: 0 15px;
  font-size: 14px;
`;
