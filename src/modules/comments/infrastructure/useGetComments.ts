import { useReactQuery } from "components/ReactQuery";

import { IComment } from "modules/comments/types";
import { ICommentsQuery } from "modules/comments/types";

import { buildUrl, get } from "utils/restService";

export const useGetComments = (query?: ICommentsQuery) => {
  return useReactQuery(getCommentsKey(query), () => getComments(query));
};

export const getComments = (query?: ICommentsQuery): Promise<IComment[]> => {
  return get<IComment[]>(buildUrl("comments", query));
};

const getCommentsKey = (query?: ICommentsQuery) => ["users", query];
