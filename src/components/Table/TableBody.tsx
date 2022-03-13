import { HTMLAttributes } from "react";

export interface ITableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = ({ children, ...restProps }: ITableBodyProps) => {
  return <tbody {...restProps}>{children}</tbody>;
};

export { TableBody };
