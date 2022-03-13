import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import { UsersPage } from "pages/UsersPage";
import { CommentsPage } from "../pages/CommentsPage";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<CommentsPage />} />
      <Route path="/users" element={<UsersPage />} />
    </ReactRouterRoutes>
  );
};

export { Routes };
