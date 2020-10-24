import styled from 'styled-components';

import { colors } from 'constants/.'

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 17px;
  color: ${colors.lightblack};
`;

export const Input = styled.input`
  width: 100%;
  padding: 24px 0;
  border: none;
  border-bottom: 1px solid ${colors.lightgray};
  outline: none;
`;