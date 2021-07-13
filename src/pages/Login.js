import React, { useState } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import AppIcon from "../images/icon.png";

const styles = {
  form: {
    textAlign: "center",
  },
  icon: {
    maxWidth: "100px",
    margin: "20px auto",
  },
};

const Login = ({ classes }) => {
  const [dataUser, setDataUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
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
            fullWidth
          />
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default withStyles(styles)(Login);
