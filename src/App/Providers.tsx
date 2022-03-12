import { BrowserRouter } from "react-router-dom";

import { IntlProvider } from "components/Translation";
import { ReactQueryClientProvider } from "components/ReactQuery";

import { IChildrenProp } from "../types";

interface IProps extends IChildrenProp {}

const Providers = ({ children }: IProps) => {
  return (
    <BrowserRouter>
      <ReactQueryClientProvider>
        <IntlProvider>{children}</IntlProvider>
      </ReactQueryClientProvider>
    </BrowserRouter>
  );
};

export { Providers };
