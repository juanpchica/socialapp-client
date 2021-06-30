import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
const styles = {
  card: {
    display: "flex",
  },
};

const Scream = (props) => {
  const { classes } = props;

  return (
    <div>
      <h1>{scream.body}</h1>
    </div>
  );
};

export default withStyles(styles)(Scream);
