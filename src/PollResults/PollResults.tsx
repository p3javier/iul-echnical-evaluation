import React, { useEffect } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Loader from "../PollResultsSkeleton/PollResultsSkeleton";
import { useAPI } from "../useAPI/useAPI";

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
  const { polls, fetchAPI } = useAPI();

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return (
    <div className={classes.root} style={{ marginTop: 20 }}>
      {polls ? polls : <Loader />}
    </div>
  );
}
