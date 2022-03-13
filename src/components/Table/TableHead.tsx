import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ITableHeadProps extends HTMLAttributes<HTMLTableRowElement> {}

const TableHead = ({ children, ...restProps }: ITableHeadProps) => {
  return <StyledTableHead {...restProps}>{children}</StyledTableHead>;
};

const StyledTableHead = styled.tr`
  background-color: lightsteelblue;
`;

export { TableHead };
