import { useState, useEffect } from "react";
import apiHandler from "./ApiHandler";
export const useAPI = () => {
  const [polls, setPolls] = useState<JSX.Element[]>();

  useEffect(() => {
    async function fetchData() {
      const pollsReceived = await apiHandler();

      setPolls(pollsReceived);
    }
    fetchData();
  }, [setPolls]);

  return polls;
};
