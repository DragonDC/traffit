import { ThHTMLAttributes } from "react";
import styled from "styled-components";

export interface ITh extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}

const Th = ({ children, ...restProps }: ITh) => {
  return <StyledTh {...restProps}>{children}</StyledTh>;
};

const StyledTh = styled.th`
  padding: 10px;
`;

export { Th };
