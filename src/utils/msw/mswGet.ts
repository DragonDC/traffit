import { rest, RestRequest } from "msw";

import { mswConfiguration } from "./mswConfiguration";
import { apiUrl } from "../restService";

export const mswGet = <R>(
  url: string,
  response: (req?: RestRequest) => R,
  statusCode: number = 200
) => {
  const path = `${apiUrl}${url}`;

  return rest.get(path, (req, res, ctx) => {
    return mswConfiguration(res, ctx, response(req), statusCode);
  });
};
