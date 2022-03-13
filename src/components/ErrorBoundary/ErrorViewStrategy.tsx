import axios from "axios";
import styled from "styled-components";

import { useFormattedMessage } from "components/Translation";

interface FallbackProps<ErrorType> {
  error: ErrorType;
}

interface IProps extends FallbackProps<Error> {}

//@todo: some rich/fancy views, different for each case
const ErrorViewStrategy = ({ error }: IProps) => {
  const { formatMessage } = useFormattedMessage();

  const ServerError = () => (
    <StyledErrorMessage>
      {formatMessage({
        id: "error-view-strategy-server-error",
        defaultMessage:
          "Encounter server error, please try again later or contact with admin",
      })}
    </StyledErrorMessage>
  );

  if (axios.isAxiosError(error)) {
    switch (error?.response?.status) {
      case 400:
        return <StyledErrorMessage>{error.message}</StyledErrorMessage>;
      case 401:
      case 403:
        return (
          <StyledErrorMessage>
            {formatMessage({
              id: "error-view-strategy-page-unavailable",
              defaultMessage: "Page unavailable",
            })}
          </StyledErrorMessage>
        );
      case 404:
        return (
          <StyledErrorMessage>
            {formatMessage({
              id: "error-view-strategy-page-not-found",
              defaultMessage: "Page not found",
            })}
          </StyledErrorMessage>
        );
      case 500:
        return <ServerError />;
      default:
        return <ServerError />;
    }
  }
  return <ServerError />;
};

const StyledErrorMessage = styled.div`
  padding: 15px;
  border: 1px solid darkred;
  border-radius: 3px;
`;

export { ErrorViewStrategy };
