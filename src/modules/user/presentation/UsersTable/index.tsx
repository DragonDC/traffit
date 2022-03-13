import { useGetUsers } from "modules/user/infrastructure";
import { UserAddress } from "modules/user/presentation";

import { Table, TableBody, TableRow, Td } from "components/Table";

import { TableHeader } from "./TableHeader";

const UsersTable = () => {
  const { data } = useGetUsers();

  return (
    <Table>
      <TableHeader />
      <TableBody>
        {data?.map((user) => {
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

export { UsersTable };
