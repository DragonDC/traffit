import { BrowserRouter } from "react-router-dom";

import { IntlProvider } from "components/Translation";
import { ReactQueryClientProvider } from "components/ReactQuery";
import { ErrorBoundary } from "components/ErrorBoundary";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

const Providers = ({ children }: IProps) => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ReactQueryClientProvider>
          <IntlProvider>{children}</IntlProvider>
        </ReactQueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export { Providers };
