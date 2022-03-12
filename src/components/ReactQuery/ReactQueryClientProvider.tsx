import { QueryClient, QueryClientProvider } from "react-query";
import { QueryClientProviderProps } from "react-query/types/react/QueryClientProvider";
import { ReactNode } from "react";

interface IProps extends Omit<QueryClientProviderProps, "client"> {
  children: ReactNode;
}

const ReactQueryClientProvider = ({ children, ...restProps }: IProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} {...restProps}>
      {children}
    </QueryClientProvider>
  );
};

export { ReactQueryClientProvider };
