import { IUser } from "modules/user/types";

import { useReactQuery } from "components/ReactQuery";

import { buildUrl, get } from "utils/restService";

export const useGetUser = (userId: number) => {
  return useReactQuery(getUsersKey(userId), () => getUsers(userId));
};

export const getUsers = (userId: number): Promise<IUser> => {
  return get<IUser>(buildUrl("users", { userId: userId }));
};

const getUsersKey = (userId: number) => ["user", userId];
