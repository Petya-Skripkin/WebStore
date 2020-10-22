import styled from 'styled-components';

import { colors } from '../../constants';

const Button = styled.button`
  width: 100%;
  padding: 16px 0;
  border: none;
  border-radius: 6px;
  text-align: center;
  background: ${colors.blue};
  color: ${colors.white};
  outline: none;
  cursor: pointer;
`;

export default Button;