import { useCommentFieldsTranslation } from "modules/comments/presentation";

import { TableHead, Th } from "components/Table";

const TableHeader = () => {
  const commentFieldsTranslation = useCommentFieldsTranslation();
  return (
    <TableHead>
      <Th>{commentFieldsTranslation.id}</Th>
      <Th>{commentFieldsTranslation.name}</Th>
      <Th>{commentFieldsTranslation.email}</Th>
      <Th>{commentFieldsTranslation.body}</Th>
    </TableHead>
  );
};

export { TableHeader };
