import { Suspense } from "react";

import { ReactQueryDevtools } from "components/ReactQuery";
import { Layout } from "components/Layout";
import { Providers } from "components/Providers";
import { Spinner } from "components/Spinner";

import { Routes } from "./Routes";

function App() {
  return (
    <Providers>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes />
        </Suspense>
      </Layout>
      <ReactQueryDevtools />
    </Providers>
  );
}

export default App;
