import styled from "styled-components";

import { IComment } from "modules/comments/types";
import { useCommentFieldsTranslation } from "modules/comments/presentation";

import { VStack } from "components/VStack";
import { HStack } from "components/HStack";

interface IProps {
  comment: IComment;
}

const CommentTile = ({ comment }: IProps) => {
  const commentFieldsTranslation = useCommentFieldsTranslation();

  return (
    <MobileTile>
      <VStack gap="10px">
        <HStack gap="10px">
          <FieldDescription>{commentFieldsTranslation.id}:</FieldDescription>
          {comment.id}
        </HStack>
        <HStack gap="10px">
          <FieldDescription>{commentFieldsTranslation.name}:</FieldDescription>
          {comment.name}
        </HStack>
        <HStack gap="10px">
          <FieldDescription>{commentFieldsTranslation.email}:</FieldDescription>
          {comment.email}
        </HStack>
        <HStack gap="10px">
          <FieldDescription>{commentFieldsTranslation.body}:</FieldDescription>
          {comment.body}
        </HStack>
      </VStack>
    </MobileTile>
  );
};

const FieldDescription = styled.span`
  font-weight: bold;
`;

const MobileTile = styled.div`
  border-radius: 5px;
  border: 1px solid lightsteelblue;
  padding: 10px;
`;

export { CommentTile };
