import React from "react";

import { ModalContainer } from "react-router-modal";

import { Container, StyledModalBox, Content, GlobalContainer } from "./styles";

interface IProps {
  path: string;
  parentPath?: string;
  Component: any;
  withoutPadding?: boolean;
}

const ModalBox = ({ path, parentPath, Component, withoutPadding }: IProps) => {
  return (
    <GlobalContainer>
      <ModalContainer/>
      <Container>
        <StyledModalBox path={path} parentPath={parentPath}>
          <Content withoutPadding={withoutPadding}>{Component}</Content>
        </StyledModalBox>
      </Container>
    </GlobalContainer>
  );
};

export default ModalBox;
