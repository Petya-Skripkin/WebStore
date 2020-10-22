import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../constants";

export const MainContainer = styled.div`
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
