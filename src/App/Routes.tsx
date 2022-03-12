import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={"Home page comments"} />
      <Route path="/users" element={"Users page"} />
    </ReactRouterRoutes>
  );
};

export { Routes };
