import React, { useState } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import AppIcon from "../images/icon.png";
import axios from "axios";

const styles = {
  form: {
    textAlign: "center",
  },
  icon: {
    maxWidth: "100px",
    margin: "20px auto",
  },
  pageTitle: {
    magin: "10px auto",
  },
  textField: {
    margin: "10px auto",
  },
  button: {
    marginTop: 20,
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
};

const Login = ({ classes, history }) => {
  const [dataUser, setDataUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    //Send info to login url
    axios
      .post(`/login`, dataUser)
      .then((res) => {
        console.log(res.data);
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
          Login
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
          >
            LOGIN
          </Button>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default withStyles(styles)(Login);
