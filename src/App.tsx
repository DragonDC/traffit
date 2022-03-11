import {
  ReactQueryClientProvider,
  ReactQueryDevtools,
} from "components/ReactQuery";
import { IntlProvider } from "./components/Translation";

function App() {
  return (
    <ReactQueryClientProvider>
      <IntlProvider>
        <div className="App">Test</div>
      </IntlProvider>
      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
}

export default App;
