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
  height: 100%;
  justify-content: center;
  padding: 0 20px 0 20px;
`;

export { Layout };
