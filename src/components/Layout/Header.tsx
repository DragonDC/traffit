import styled from "styled-components";
import { Link } from "react-router-dom";

import { useFormattedMessage } from "components/Translation";
import { HStack } from "components/HStack";

const Header = () => {
  const { formatMessage } = useFormattedMessage();

  return (
    <StyledHeader>
      <HStack gap="30px">
        <StyledLink to="/">
          {formatMessage({
            id: "header-navigation-link-comments",
            defaultMessage: "CommentsPage",
          })}
        </StyledLink>
        <StyledLink to="/users">
          {formatMessage({
            id: "header-navigation-link-users",
            defaultMessage: "Users",
          })}
        </StyledLink>
      </HStack>
    </StyledHeader>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledHeader = styled.div`
  display: flex;
  height: 80px;
  background-color: lightsteelblue;
  position: sticky;
  align-items: center;
  justify-content: end;
  padding: 5px 20px 5px 20px;
`;

export { Header };
