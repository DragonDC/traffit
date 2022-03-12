import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ITableRow extends HTMLAttributes<HTMLTableRowElement> {}

const TableRow = ({ children, ...restProps }: ITableRow) => {
  return <StyledTableRow {...restProps}>{children}</StyledTableRow>;
};

const StyledTableRow = styled.tr`
  background-color: #fff;
`;

export { TableRow };
