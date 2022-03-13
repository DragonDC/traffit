import { Suspense } from "react";

import { useGetUsers } from "modules/user/infrastructure";

import { useCheckMobile } from "utils/useCheckIsMobile";

import { ErrorBoundary } from "components/ErrorBoundary";
import { Spinner } from "components/Spinner";

import { UsersTableDesktop } from "./UsersTableDesktop";
import { UsersMobile } from "./UsersMobile";

const UsersTableThrowable = () => {
  const { data } = useGetUsers();
  const isMobile = useCheckMobile();

  if (!data || data.length === 0) {
    //@todo: Some fancy empty state component which could be reused in another views
    return <div>Found no data</div>;
  }

  return (
    <>
      {isMobile ? (
        <UsersMobile users={data} />
      ) : (
        <UsersTableDesktop users={data} />
      )}
    </>
  );
};

const UsersTable = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <UsersTableThrowable />
      </Suspense>
    </ErrorBoundary>
  );
};

export { UsersTable };
