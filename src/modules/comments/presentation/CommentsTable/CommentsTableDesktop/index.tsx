import { IComment } from "modules/comments/types";

import { Table, TableBody, TableRow, Td } from "components/Table";

import { Pagination } from "components/Pagination";
import { VStack } from "components/VStack";

import { TableHeader } from "./TableHeader";

interface IProps {
  comments: IComment[];
}

const CommentsTableDesktop = ({ comments }: IProps) => {
  return (
    <VStack gap="20px">
      <Table>
        <TableHeader />
        <TableBody>
          {comments.map((comment) => {
            return (
              <TableRow>
                <Td>{comment.id}</Td>
                <Td>{comment.name}</Td>
                <Td>{comment.email}</Td>
                <Td>{comment.body}</Td>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Pagination total={500} limit={10} />
    </VStack>
  );
};

export { CommentsTableDesktop };
