import { ReactElement, Suspense } from "react";
import { RenderOptions } from "@testing-library/react";
import { render as reactTestingLibraryRender } from "@testing-library/react";

import { Providers } from "components/Providers";

const render = (ui: ReactElement, options?: RenderOptions) => {
  return reactTestingLibraryRender(
    <Providers>
      <Suspense fallback={() => {}}>{ui}</Suspense>
    </Providers>,
    options
  );
};

export { render };
