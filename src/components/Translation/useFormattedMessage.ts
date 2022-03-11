import { useIntl } from "react-intl";

export const useFormattedMessage = () => {
    return { formatMessage: useIntl().formatMessage };
};
