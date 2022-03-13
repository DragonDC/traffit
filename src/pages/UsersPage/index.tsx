import { UsersTable } from "modules/user/presentation";

import { PageTitle } from "components/PageTitle";
import { useFormattedMessage } from "components/Translation";
import { VStack } from "components/VStack";

const UsersPage = () => {
  const { formatMessage } = useFormattedMessage();

  return (
    <VStack gap="25px">
      <PageTitle
        title={formatMessage({
          id: "users-page-title",
          defaultMessage: "Users",
        })}
      />
      <UsersTable />
    </VStack>
  );
};

export { UsersPage };
