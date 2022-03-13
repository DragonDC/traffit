import { useGetUsers } from "modules/user/infrastructure";

import { useCheckMobile } from "utils/useCheckIsMobile";

import { UsersTableDesktop } from "./UsersTableDesktop";
import { UsersMobile } from "./UsersMobile";

const UsersTable = () => {
  const { data } = useGetUsers();
  const isMobile = useCheckMobile();

  if (!data) {
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

export { UsersTable };
