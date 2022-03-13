import { IUser } from "modules/user/types";

import { VStack } from "components/VStack";

import { UserTile } from "./UserTile";

interface IProps {
  users: IUser[];
}
const UsersMobile = ({ users }: IProps) => {
  return (
    <VStack gap="20px" id="users-mobile">
      {users.map((user) => {
        return <UserTile user={user} />;
      })}
    </VStack>
  );
};

export { UsersMobile };
