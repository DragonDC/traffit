import { Suspense } from "react";

import { ReactQueryDevtools } from "components/ReactQuery";
import { Layout } from "components/Layout";

import { Providers } from "./Providers";
import { Routes } from "./Routes";

function App() {
  return (
    <Providers>
      <Layout>
        <Suspense fallback={() => "...loading"}>
          <Routes />
          {/*<UsersTable />*/}
          {/*<CommentsTable />*/}
        </Suspense>
      </Layout>
      <ReactQueryDevtools />
    </Providers>
  );
}

export default App;
