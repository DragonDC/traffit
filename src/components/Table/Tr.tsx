import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ITrProps extends HTMLAttributes<HTMLTableRowElement> {}

const Tr = ({ children, ...restProps }: ITrProps) => {
  return <StyledTr {...restProps}>{children}</StyledTr>;
};

const StyledTr = styled.tr`
  padding: 10px;
  border: 1px solid lightsteelblue;
`;

export { Tr };
