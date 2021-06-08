import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact component={Home} path='/' />
        <Route component={Login} path='/login' />
        <Route component={Signup} path='/signup' />
      </Router>
    </div>
  );
}

export default App;
