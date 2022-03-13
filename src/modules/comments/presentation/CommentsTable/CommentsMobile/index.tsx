import { IComment } from "modules/comments/types";

import { VStack } from "components/VStack";
import { Pagination } from "components/Pagination";

import { CommentTile } from "./CommentTile";

interface IProps {
  comments: IComment[];
  limit: number;
  total: number;
}

const CommentsMobile = ({ comments, limit, total }: IProps) => {
  return (
    <VStack gap="20px" style={{ marginBottom: "30px" }}>
      {comments.map((comment) => {
        return <CommentTile comment={comment} />;
      })}
      <Pagination limit={limit} total={total} />
    </VStack>
  );
};

export { CommentsMobile };
