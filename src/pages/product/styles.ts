import styled from 'styled-components';

import { colors } from 'constants/.';


export const TitleLink = styled.p`
  text-align: center;

  &::before {
    content: "Главная / ";
    color: ${colors.grey};
  }
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;
  padding-bottom: 80px;
`;

export const Content = styled.div`
  width: 380px;
  margin: 16px 0;
`;
