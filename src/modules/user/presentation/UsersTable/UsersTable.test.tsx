import { waitFor, screen } from "@testing-library/react";

import { render } from "utils/test";

import { UsersTable } from "./index";

// const server = setupServer();

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe("Search services", () => {
  it("should render results when there is data from response", async () => {
    //given
    render(<UsersTable />);
    //when

    //then
    await waitFor(() => {
      expect(screen.getByTestId("users-desktop-table")).toBeInTheDocument();
    });
  });
});
