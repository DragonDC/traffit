import { useSearchParams } from "react-router-dom";

import { useGetComments } from "modules/comments/infrastructure";

import { useCheckMobile } from "utils/useCheckIsMobile";

import { CommentsTableDesktop } from "./CommentsTableDesktop";

const CommentsTable = () => {
  const [searchParams] = useSearchParams();
  const _page = Number(searchParams.get("_page")) || 0;
  const _limit = 10;

  const { data } = useGetComments({ _page, _limit });
  const isMobile = useCheckMobile();

  if (!data) {
    return <div>Found no data</div>;
  }

  return (
    <>
      {/*{isMobile ? (*/}
      {/*  <UsersMobile users={data} />*/}
      {/*) : (*/}
      <CommentsTableDesktop comments={data} />
      {/*)}*/}
    </>
  );
};

export { CommentsTable };
