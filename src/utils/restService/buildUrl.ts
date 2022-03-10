import { stringify } from "query-string";

export const buildUrl = (url: string, params?: object) => {
  if (!params) {
    return url;
  }
  return `${url}?${stringify({ ...params }, { arrayFormat: "comma" })}`;
};
