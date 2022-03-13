import { CommentsTable } from "modules/comments/presentation";

import { PageTitle } from "components/PageTitle";
import { useFormattedMessage } from "components/Translation";
import { VStack } from "components/VStack";

const CommentsPage = () => {
  const { formatMessage } = useFormattedMessage();

  return (
    <VStack gap="25px">
      <PageTitle
        title={formatMessage({
          id: "comments-page-title",
          defaultMessage: "Comments",
        })}
      />
      <CommentsTable />
    </VStack>
  );
};

export { CommentsPage };
