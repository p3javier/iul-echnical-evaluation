import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import PollResults from "../PollResults/PollResults";
//import "./App.css";

import { Title } from "../Title/Title";
function App() {
  return (
    <div className="App">
      <Container>
        <Box my={4}>
          <header className="App-header">
            <Title />
          </header>
          <PollResults />
        </Box>
      </Container>
    </div>
  );
}

export default App;
