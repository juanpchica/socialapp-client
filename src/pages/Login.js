import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = {
  form: {
    textAlign: "center",
  },
};

const Login = ({ classes }) => {
  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        Yoo
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default withStyles(styles)(Login);
