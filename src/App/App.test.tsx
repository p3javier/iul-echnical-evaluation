import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("must display a title", () => {
    render(<App />);
    const title = screen.getByText(/Poll Results App/i);
    expect(title).toBeInTheDocument();
  });
});
