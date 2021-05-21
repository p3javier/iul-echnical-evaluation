import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  headerPaper: {
    backgroundColor: deepPurple[900],
    color: "white",
  },
}));

export const Title = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Paper className={classes.headerPaper}>
        <Box p={2}>
          <Typography align="center" variant="h3" component="h1">
            Poll Results App
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
