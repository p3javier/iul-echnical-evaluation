import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  test("must be an h1 tag", () => {
    render(<Title />);
    const h1 = document.querySelector("h1");
    expect(h1).toBeInTheDocument();
  });
});
