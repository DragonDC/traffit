import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ITr extends HTMLAttributes<HTMLTableRowElement> {}

const Tr = ({ children, ...restProps }: ITr) => {
  return <StyledTr {...restProps}>{children}</StyledTr>;
};

const StyledTr = styled.tr`
  padding: 10px;
`;

export { Tr };
