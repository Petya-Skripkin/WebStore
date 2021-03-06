import styled from 'styled-components';

import { colors } from '../../constants';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
height: 300px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  color: ${colors.lightblack};
  text-transform: uppercase;
`;

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: ${colors.grey};

  &:hover {
    color: ${colors.lightblack};
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${colors.grey};
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${colors.lightblack};
  }
`;
