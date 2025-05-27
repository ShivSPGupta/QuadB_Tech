import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserList from "../components/json/users";
import { server } from "../components/MSW/server";
import { http } from "msw";
import "@testing-library/dom";

// Start MSW before all tests
beforeAll(() => server.listen());
// Reset handlers after each test
afterEach(() => server.resetHandlers());
// Clean up MSW after tests
afterAll(() => server.close());

test("renders mocked users list", async () => {
  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });
});

test("shows error message on API failure", async () => {
  server.use(
    http.get("/api/users", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByRole("alert")).toHaveTextContent("Failed to load users");
  });
});
