import { IUser } from "modules/user/types";

import { useReactQuery } from "components/ReactQuery";

import { get } from "utils/restService";

export const useGetUsers = () => {
  return useReactQuery(getUsersKey(), getUsers);
};

export const getUsers = (): Promise<IUser[]> => {
  return get<IUser[]>("users");
};

const getUsersKey = () => ["users"];
