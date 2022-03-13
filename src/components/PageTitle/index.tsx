import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
}

const PageTitle = ({ title }: IProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.span`
  font-weight: bold;
  font-size: xx-large;
`;

export { PageTitle };
