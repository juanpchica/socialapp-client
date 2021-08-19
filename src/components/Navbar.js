import React, { Fragment } from "react";

//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";

// React Router
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";

//My Components
import MyButton from "../util/MyButton";
import PostScream from "./PostScream";

const Navbar = ({ authenticated }) => {
  return (
    <AppBar position='static'>
      <Toolbar className='nav-container'>
        {authenticated ? (
          <Fragment>
            <PostScream />
            <Link to='/'>
              <MyButton tip='Home'>
                <HomeIcon />
              </MyButton>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Button color='inherit' component={Link} to='/'>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/login'>
              Login
            </Button>
            <Button color='inherit' component={Link} to='/signup'>
              Signup
            </Button>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
