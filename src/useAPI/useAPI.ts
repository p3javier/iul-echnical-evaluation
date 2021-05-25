import { useState, useCallback } from "react";
import apiHandler from "./ApiHandler";
export const useAPI = () => {
  const [polls, setPolls] = useState<JSX.Element[]>();
  const fetchAPI = useCallback(() => {
    async function fetchData() {
      const pollsReceived = await apiHandler();

      setPolls(pollsReceived);
    }
    fetchData();
  }, []);

  return { polls, fetchAPI };
};
