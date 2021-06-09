import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navbar } from "./components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4400",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Route exact component={Home} path='/' />
        <Route component={Login} path='/login' />
        <Route component={Signup} path='/signup' />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
