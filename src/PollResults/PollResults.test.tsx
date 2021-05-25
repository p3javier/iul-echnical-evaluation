import React from "react";
import { render, getByText } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";

import PollResults from "./PollResults";
import apiRequest from "../services/PollsAPI";
import { useAPI } from "../useAPI/useAPI";

jest.mock("../services/PollsAPI");

const mockApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>;

interface IPollResult {
  published_at: string; //cambiar a Date
  url: string;
  question: string;
  choices: {
    url: string;
    votes: number;
    choice: string;
  }[];
}

const mockResponse: IPollResult[] = [
  {
    question: "Favourite programming language?",
    choices: [
      { choice: "Javascript", votes: 0, url: "/questions/12/choices/80" },
      { choice: "Objective-C", votes: 0, url: "/questions/12/choices/81" },
      { choice: "Python", votes: 0, url: "/questions/12/choices/82" },
      { choice: "Ruby", votes: 0, url: "/questions/12/choices/83" },
    ],
    published_at: "2021-05-15T18:37:12.709Z",
    url: "/questions/12",
  },
  {
    question: "Favourite programming language?",
    choices: [
      { choice: "Ruby", votes: 2, url: "/questions/11/choices/78" },
      { choice: "Objective-C", votes: 1, url: "/questions/11/choices/76" },
      { choice: "Python", votes: 0, url: "/questions/11/choices/77" },
      { choice: "Swift", votes: 0, url: "/questions/11/choices/79" },
    ],
    published_at: "2021-05-10T09:52:37.157Z",
    url: "/questions/11",
  },
];

describe("PollResult tests", () => {
  test("displays poll results on load", () => {
    mockApiRequest.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useAPI());
    const { container } = render(<PollResults />);

    act(() => {
      result.current.fetchAPI();
    });

    console.log("POLLS", result.current.polls);
    const firstQuestion = getByText(
      container,
      /Favourite programming language?/i
    );
    expect(firstQuestion).toBeInTheDocument();
  });
});
