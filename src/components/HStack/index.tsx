import { IChildrenProp } from "types";
import styled from "styled-components";

export interface IHStackProps extends IChildrenProp, IContainerProps {}

interface IContainerProps {
  gap?: string;
  alignItems?: string;
  alignContent?: string;
  justifyContent?: string;
}

const HStack = ({ children, ...restProps }: IHStackProps) => {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

const StyledContainer = styled.div<IContainerProps>`
  display: flex;
  gap: ${({ gap }) => gap};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export { HStack };
