import { waitFor, screen } from "@testing-library/react";

import { render } from "utils/test";
import { mswGet, setupServer } from "utils/msw";
import { createUser } from "utils/test/mocks";

import { IUser } from "modules/user/types";

import { UsersTable } from "./index";
import { IComment } from "../../../comments/types";
import { CommentsTable } from "../../../comments/presentation";

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Users table", () => {
  it("should render results when there is data from response", async () => {
    //given
    server.use(mswGet<IUser[]>(`users`, () => [createUser()], 200));
    render(<UsersTable />);
    //when

    //then
    await waitFor(() => {
      expect(screen.getByTestId("users-desktop-table")).toBeInTheDocument();
    });
  });

  it("should render empty state when there is no data from response", async () => {
    //given
    server.use(mswGet<IUser[]>(`users`, () => [], 200));
    render(<UsersTable />);
    //when

    //then
    await waitFor(() => {
      expect(screen.getByText("Found no data")).toBeInTheDocument();
    });
  });

  it("should render error state when there is error status in response", async () => {
    //given
    server.use(mswGet<IUser[]>(`users`, () => [], 500));
    render(<UsersTable />);
    //when

    //then
    await waitFor(() => {
      expect(
        screen.getByText("Encounter server error", { exact: false })
      ).toBeInTheDocument();
    });
  });
});
