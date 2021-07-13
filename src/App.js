import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navbar } from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";

const theme = createMuiTheme(themeFile);

//Validate if token exist and token is correct for user logged in
let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Route exact component={Home} path='/' />
          <AuthRoute
            component={Login}
            path='/login'
            authenticated={authenticated}
          />
          <AuthRoute
            component={Signup}
            path='/signup'
            authenticated={authenticated}
          />
        </Container>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
