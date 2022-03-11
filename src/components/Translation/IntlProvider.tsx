import { IntlProvider as ReactIntlProvider } from "react-intl";

import pl from "lang/pl.json";
import en from "lang/en.json";

import { IChildrenProp } from "types/IChildrenProp";

const message: any = {
  pl,
  en,
};

interface IProps extends IChildrenProp {}

const IntlProvider = ({ children }: IProps) => {
  const locale = "pl"; //@todo: hardcoded, in future it could be some switch to change language and store that value in localstorage

  return (
    <ReactIntlProvider locale={locale} messages={message[locale]}>
      {children}
    </ReactIntlProvider>
  );
};

export { IntlProvider };
