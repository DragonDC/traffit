import {
  ReactQueryClientProvider,
  ReactQueryDevtools,
} from "components/ReactQuery";
import { Suspense } from "react";
import { IntlProvider } from "./components/Translation";
import { UsersTable } from "./modules/user/application";

function App() {
  return (
    <ReactQueryClientProvider>
      <IntlProvider>
        <Suspense fallback={() => "...loading"}>
          <div className="App">Test</div>
          <UsersTable />
        </Suspense>
      </IntlProvider>
      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
}

export default App;
