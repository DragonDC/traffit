import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

const TableRow = ({ children, ...restProps }: ITableRowProps) => {
  return <StyledTableRow {...restProps}>{children}</StyledTableRow>;
};

const StyledTableRow = styled.tr`
  background-color: #fff;
`;

export { TableRow };
