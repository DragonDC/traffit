import { useGetUsers } from "modules/user/infrastructure";

const UsersTable = () => {
  const { data } = useGetUsers();
  console.log(data);

  return <div></div>;
};

export { UsersTable };
