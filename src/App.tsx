import {
  ReactQueryClientProvider,
  ReactQueryDevtools,
} from "components/ReactQuery";

function App() {
  return (
    <ReactQueryClientProvider>
      <div className="App">Test</div>
      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
}

export default App;
