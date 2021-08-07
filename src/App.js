import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import jwtDecode from "jwt-decode";
import axios from "axios";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//Components
import themeFile from "./util/theme";
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";

const theme = createMuiTheme(themeFile);

//Validate if token exist and token is correct for user logged in
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    store.dispatch(logoutUser());
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;

    //Each time the page is load, get user data if token exists
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Container>
            <Route exact component={Home} path='/' />
            <AuthRoute component={Login} path='/login' />
            <AuthRoute component={Signup} path='/signup' />
          </Container>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
