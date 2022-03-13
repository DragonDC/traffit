import { useUserFieldsTranslation } from "modules/user/presentation";

import { TableHead, Th } from "components/Table";

const TableHeader = () => {
  const userFieldsTranslation = useUserFieldsTranslation();

  return (
    <TableHead>
      <Th>{userFieldsTranslation.username}</Th>
      <Th>{userFieldsTranslation.name}</Th>
      <Th>{userFieldsTranslation.email}</Th>
      <Th>{userFieldsTranslation.address}</Th>
      <Th>{userFieldsTranslation.phone}</Th>
    </TableHead>
  );
};

export { TableHeader };
