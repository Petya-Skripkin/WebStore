import { ModalRoute } from "react-router-modal";
import styled, { css } from "styled-components";
import "react-router-modal/css/react-router-modal.css";

export const GlobalContainer = styled.div``;

export const StyledModalBox = styled(ModalRoute)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div<{ withoutPadding?: boolean }>`
  position: relative;
  border-radius: 18px;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: white;
  max-width: calc(100vw - 40px);
  min-width: 400px;
  min-height: 300px;
  width: max-content;

  ${({ withoutPadding }) =>
  withoutPadding && css`
    padding: 0;
  `}
`;

export const Container = styled.div`
  background-color: red;
`;
