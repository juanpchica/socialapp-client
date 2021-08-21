import React, { Fragment } from "react";

//MUI
import { Dialog } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

//My Components
import MyButton from "../util/MyButton";

//Icons
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const styles = {
  buttonDialog: {
    position: "absolute",
    right: "15px",
  },
};

const ScreamDialog = ({ classes }) => {
  return (
    <Fragment>
      <MyButton tip='Expand Scream!!!' btnClassName={classes.buttonDialog}>
        <UnfoldMoreIcon color='primary' />
      </MyButton>
      <Dialog></Dialog>
    </Fragment>
  );
};

export default withStyles(styles)(ScreamDialog);
