import styled from "styled-components";

import Icon from "../icon";

import { colors } from "../../constants";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colors.black};
  opacity: 0.8;
  cursor: pointer;
  z-index: 998;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  padding: 35px 47px;
  border-radius: 10px;
  background: ${colors.white};
  color: ${colors.lightblack};
  z-index: 999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.lightgray};
  border-radius: 0px 8px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const CloseIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  stroke: ${colors.lightgray};
  fill: none;
`;
