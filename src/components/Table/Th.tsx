import { ThHTMLAttributes } from "react";
import styled from "styled-components";

export interface IThProps
  extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}

const Th = ({ children, ...restProps }: IThProps) => {
  return <StyledTh {...restProps}>{children}</StyledTh>;
};

const StyledTh = styled.th`
  padding: 10px;
  border: 1px solid lightsteelblue;
`;

export { Th };
