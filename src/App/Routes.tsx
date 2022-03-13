import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import { UsersPage } from "pages/UsersPage";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={"Home page comments"} />
      <Route path="/users" element={<UsersPage />} />
    </ReactRouterRoutes>
  );
};

export { Routes };
