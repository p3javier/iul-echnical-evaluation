import React, { useState, useEffect } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import apiHandler from "./ApiHandler";
import Loader from "../PollResultsSkeleton/PollResultsSkeleton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

export default function PollResultsContainer() {
  const classes = useStyles();
  const [polls, setPolls] = useState<JSX.Element[]>();

  useEffect(() => {
    async function fetchData() {
      const pollsReceived = await apiHandler();

      setPolls(pollsReceived);
    }
    fetchData();
  }, [setPolls]);
  return (
    <div className={classes.root} style={{ marginTop: 20 }}>
      {polls ? polls : <Loader />}
    </div>
  );
}
