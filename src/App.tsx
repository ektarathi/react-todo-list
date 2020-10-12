import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Table from './components/Table';
import Box from "@material-ui/core/Box";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Typography component="div">
            <Box py={2}>
              <Typography variant="h5" component="h1" align="center"> A Todo list App </Typography>
            </Box>
            <Table/>
          </Typography>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default App;
