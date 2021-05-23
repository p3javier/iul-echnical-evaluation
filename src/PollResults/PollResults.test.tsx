import React from "react";
import { render, screen } from "@testing-library/react";
import { PollResults } from "./PollResults";

describe("PollResult tests", () => {
  test("must be an h1 tag", () => {
    render(<PollResults />);
    const h1 = document.querySelector("h1");
    expect(h1).toBeInTheDocument();
  });
});
