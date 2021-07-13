import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import themeFile from "./util/theme";

import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navbar } from "./components/Navbar";

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Route exact component={Home} path='/' />
          <Route component={Login} path='/login' />
          <Route component={Signup} path='/signup' />
        </Container>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
