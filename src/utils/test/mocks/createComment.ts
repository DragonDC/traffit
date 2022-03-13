import { IComment } from "modules/comments/types";

export const createComment = (comment?: IComment): IComment => {
  return {
    id: 123,
    body: "Body",
    name: "Name",
    email: "email@gmail.com",
    postId: 43,
    ...comment,
  };
};
