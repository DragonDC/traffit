import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface IVStackProps
  extends IContainerProps,
    HTMLAttributes<HTMLDivElement> {}

interface IContainerProps {
  gap?: string;
  alignItems?: string;
  alignContent?: string;
  justifyContent?: string;
}

const VStack = ({ children, ...restProps }: IVStackProps) => {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

const StyledContainer = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export { VStack };
