import styled from 'styled-components';

import Icon from '../icon';
import { colors } from '../../constants';

export const Content = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 248px;
  padding: 14px 10px;
  border-radius: 6px;
  color: ${colors.grey};
  cursor: pointer;
`;

export const SearchIcon = styled(Icon)`
  height: 17px;
`;

export const Input = styled.input`
  width: 80%;
  border: none;
  outline: none;
`;