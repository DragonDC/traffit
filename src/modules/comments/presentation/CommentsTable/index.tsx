import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";

import { useGetComments } from "modules/comments/infrastructure";

import { useCheckMobile } from "utils/useCheckIsMobile";

import { ErrorBoundary } from "components/ErrorBoundary";
import { Spinner } from "components/Spinner";

import { CommentsTableDesktop } from "./CommentsTableDesktop";
import { CommentsMobile } from "./CommentsMobile";

const CommentsTableThrowable = () => {
  const [searchParams] = useSearchParams();
  const _page = Number(searchParams.get("_page")) || 0;
  const _limit = 10;

  const { data } = useGetComments({ _page, _limit });
  //and below some shitty code only to find the total.....
  const { data: allComments } = useGetComments();
  const total = allComments?.length || 0;

  const isMobile = useCheckMobile();

  if (!data || data.length === 0) {
    return <div>Found no data</div>;
  }

  return (
    <>
      {isMobile ? (
        <CommentsMobile comments={data} total={total} limit={_limit} />
      ) : (
        <CommentsTableDesktop comments={data} total={total} limit={_limit} />
      )}
    </>
  );
};

const CommentsTable = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <CommentsTableThrowable />
      </Suspense>
    </ErrorBoundary>
  );
};

export { CommentsTable };
