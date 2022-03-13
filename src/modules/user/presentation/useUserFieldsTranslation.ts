import { useFormattedMessage } from "components/Translation";

export const useUserFieldsTranslation = () => {
  const { formatMessage } = useFormattedMessage();

  return {
    username: formatMessage({
      id: "user-translation-username",
      defaultMessage: "Username",
    }),
    name: formatMessage({
      id: "user-translation-name",
      defaultMessage: "Name",
    }),
    email: formatMessage({
      id: "user-translation-email",
      defaultMessage: "Email",
    }),
    address: formatMessage({
      id: "user-translation-address",
      defaultMessage: "Address",
    }),
    phone: formatMessage({
      id: "user-translation-phone",
      defaultMessage: "Phone",
    }),
  };
};
