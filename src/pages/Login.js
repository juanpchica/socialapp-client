import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

import AppIcon from "../images/icon.png";
const styles = {
  form: {
    textAlign: "center",
  },
  icon: {
    maxWidth: "100px",
  },
};

const Login = ({ classes }) => {
  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt='monkey' className={classes.icon} />
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default withStyles(styles)(Login);
