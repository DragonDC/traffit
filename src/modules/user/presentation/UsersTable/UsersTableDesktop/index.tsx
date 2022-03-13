import { UserAddress } from "modules/user/presentation";
import { IUser } from "modules/user/types";

import { Table, TableBody, TableRow, Td } from "components/Table";

import { TableHeader } from "./TableHeader";

interface IProps {
  users: IUser[];
}

const UsersTableDesktop = ({ users }: IProps) => {
  return (
    <Table>
      <TableHeader />
      <TableBody>
        {users.map((user) => {
          return (
            <TableRow>
              <Td>{user.username}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <UserAddress userAddress={user.address} />
              </Td>
              <Td>{user.phone}</Td>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export { UsersTableDesktop };
