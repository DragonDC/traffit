import { QueryKey, useQuery } from "react-query";
import { UseQueryOptions } from "react-query/types/react/types";

const useReactQuery = <T>(
  key: QueryKey,
  fetcher: () => Promise<T>,
  options?: UseQueryOptions<T>
) => {
  const config = {
    retry: false,
    suspense: true,
    ...options,
  };
  return useQuery<T>(key, fetcher, config);
};

export { useReactQuery };
