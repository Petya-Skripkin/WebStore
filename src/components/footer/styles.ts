import styled from "styled-components";

import { colors } from "../../constants";

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 32px 0;
  color: ${colors.lightblack};
`;

export const Logo = styled.img`
  height: 25px;
`;

export const IconContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const SIcon = styled.img`
  width: 23px;
  height: 23px;
  fill: transparent;
`;
