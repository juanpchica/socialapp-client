import React, { useState } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import AppIcon from "../images/icon.png";
import axios from "axios";
import { Link } from "react-router-dom";

//Importing redux connect and actionsCreators
import { connect } from "react-redux";
import { singupUser } from "../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.spreadThis,
});

const Signup = ({ classes, history }) => {
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    handle: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    //Send info to login url
    axios
      .post(`/signup`, dataUser)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        setErrors(err.response.data);
        setLoading(false);
      });
  };

  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt='monkey' className={classes.icon} />
        <Typography variant='h2' className={classes.pageTitle}>
          Signup
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id='email'
            name='email'
            label='Email'
            className={classes.textField}
            value={dataUser.email}
            onChange={(e) => {
              setDataUser({ ...dataUser, email: e.target.value });
            }}
            fullWidth
            helperText={errors.email}
            error={errors.email ? true : false}
          />
          <TextField
            type='password'
            id='password'
            name='password'
            label='Password'
            className={classes.textField}
            value={dataUser.password}
            onChange={(e) => {
              setDataUser({ ...dataUser, password: e.target.value });
            }}
            helperText={errors.password}
            error={errors.password ? true : false}
            fullWidth
          />

          <TextField
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            label='Confirm Password'
            className={classes.textField}
            value={dataUser.confirmPassword}
            onChange={(e) => {
              setDataUser({ ...dataUser, confirmPassword: e.target.value });
            }}
            helperText={errors.confirmPassword}
            error={errors.confirmPassword ? true : false}
            fullWidth
          />

          <TextField
            type='text'
            id='handle'
            name='handle'
            label='Handle'
            className={classes.textField}
            value={dataUser.handle}
            onChange={(e) => {
              setDataUser({ ...dataUser, handle: e.target.value });
            }}
            helperText={errors.handle}
            error={errors.handle ? true : false}
            fullWidth
          />
          {errors.general && (
            <Typography variant='body2' className={classes.customError}>
              {errors.general}
            </Typography>
          )}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={loading}
          >
            Signup
            {loading && (
              <CircularProgress size='30' className={classes.progress} />
            )}
          </Button>
          <br />
          <small>
            Already have an account? Login <Link to='/login'>here</Link>
          </small>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

const mapStateToProps = function (state) {
  return {
    UI: state.UI,
  };
};

const mapActionsToProps = {
  singupUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Signup));
