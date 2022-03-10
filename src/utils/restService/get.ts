import axios, { AxiosRequestConfig } from "axios";

import { apiUrl } from "./apiUrl";

export const get = <R>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axios.get(`${apiUrl}${url}`, config).then((response) => response.data);
};
