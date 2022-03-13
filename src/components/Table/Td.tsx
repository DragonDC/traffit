import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ITdProps extends HTMLAttributes<HTMLTableDataCellElement> {}

const Td = ({ children, ...restProps }: ITdProps) => {
  return <StyledTd {...restProps}>{children}</StyledTd>;
};

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid lightsteelblue;
`;

export { Td };
