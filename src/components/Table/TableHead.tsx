import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ITableHead extends HTMLAttributes<HTMLTableRowElement> {}

const TableHead = ({ children, ...restProps }: ITableHead) => {
  return <StyledTableHead {...restProps}>{children}</StyledTableHead>;
};

const StyledTableHead = styled.tr`
  background-color: lightsteelblue;
`;

export { TableHead };
