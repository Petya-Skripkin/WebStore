import styled from 'styled-components';

import { colors } from '../../constants';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%; 
  padding: 17px;
  box-shadow: 0px -4px 12px rgba(23, 40, 83, 0.04);
  color: ${colors.lightblack};
`;

export const Paragraph = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.lightgray};
  font-size: 20px;
  text-transform: uppercase;
`;

export const Things = styled.p`
  font-size: 14px;
`;

export const Sum = styled.p`
  &::before {
    content: "Общая сумма ";
  }
`; 