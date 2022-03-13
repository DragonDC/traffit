import { useFormattedMessage } from "components/Translation";

export const useCommentFieldsTranslation = () => {
  const { formatMessage } = useFormattedMessage();

  return {
    id: formatMessage({
      id: "comment-translation-id",
      defaultMessage: "No.",
    }),
    name: formatMessage({
      id: "comment-translation-name",
      defaultMessage: "Name",
    }),
    email: formatMessage({
      id: "comment-translation-email",
      defaultMessage: "Email",
    }),
    body: formatMessage({
      id: "comment-translation-body",
      defaultMessage: "Body",
    }),
  };
};
