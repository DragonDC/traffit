import { useGetComments } from "modules/comments/infrastructure";

const CommentsTable = () => {
  const { data } = useGetComments();
  console.log(data);

  return <div></div>;
};

export { CommentsTable };
