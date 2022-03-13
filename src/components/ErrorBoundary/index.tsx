import React, { FunctionComponent, ReactNode } from "react";
import {
  ErrorBoundary as ReactErrorBoundary,
  ErrorBoundaryPropsWithComponent,
  FallbackProps,
} from "react-error-boundary";

import { ErrorViewStrategy } from "./ErrorViewStrategy";

interface IProps
  extends Omit<
    ErrorBoundaryPropsWithComponent,
    "FallbackComponent" | "fallback"
  > {
  children: ReactNode;
  fallback?: FunctionComponent<FallbackProps>;
}

const ErrorBoundary = ({
  fallback = ErrorViewStrategy,
  children,
  ...restProps
}: IProps) => {
  return (
    <ReactErrorBoundary FallbackComponent={fallback} {...restProps}>
      {children}
    </ReactErrorBoundary>
  );
};

export { ErrorBoundary };
