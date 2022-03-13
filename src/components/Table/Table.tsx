import { TableHTMLAttributes } from "react";
import styled from "styled-components";

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {}

const Table = ({ children, ...restProps }: ITableProps) => {
  return <StyledTable {...restProps}>{children}</StyledTable>;
};

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export { Table };
