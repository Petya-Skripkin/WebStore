import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import Icon from "../../icon";
import { colors } from "../../../constants";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  background-color: ${colors.white};
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Item = styled.li`
  margin: 0;
`;

export const MenuLink = styled(Link)<{ isActive: boolean }>`
  display: block;
  color: ${colors.grey};
  text-decoration: none;
  margin-right: 70px;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${colors.lightblack};
      box-sizing: border-box;
    `}
`;

export const Logo = styled.img`
  position: absolute;
  top: 30px;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
`;

export const FlexContent = styled.span`
  display: flex;
`; 

export const Button = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  border: none;
  outline: none;
  color: ${colors.lightblack};
`;

export const Login = styled(Icon)`
  fill: transparent;
`;
