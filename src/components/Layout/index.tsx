import styled from "styled-components";

import { IChildrenProp } from "types";

import { Header } from "./Header";

interface IProps extends IChildrenProp {}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

const ChildrenContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  display: flex;
  width: 70%;
  height: 100%;
`;

export { Layout };
