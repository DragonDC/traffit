import { waitFor, screen } from "@testing-library/react";

import { render } from "utils/test";
import { mswGet, setupServer } from "utils/msw";
import { createComment } from "utils/test/mocks";

import { IComment } from "../../types";
import { CommentsTable } from "./index";

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Comments table", () => {
  it("should render results when there is data from response", async () => {
    //given
    server.use(mswGet<IComment[]>(`comments`, () => [createComment()], 200));
    render(<CommentsTable />);
    //when

    //then
    await waitFor(() => {
      expect(screen.getByTestId("comments-desktop-table")).toBeInTheDocument();
    });
  });

  it("should render empty state when there is no data from response", async () => {
    //given
    server.use(mswGet<IComment[]>(`comments`, () => [], 200));
    render(<CommentsTable />);
    //when

    //then
    await waitFor(() => {
      expect(screen.getByText("Found no data")).toBeInTheDocument();
    });
  });

  it("should render error state when there is error status in response", async () => {});
});
