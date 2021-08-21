import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

//MUI
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import withStyles from "@material-ui/core/styles/withStyles";

//My Components
import MyButton from "../util/MyButton";

//Icons
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

//Redux
import { connect } from "react-redux";
import { getScream } from "../redux/actions/dataActions";

const styles = {
  buttonDialog: {
    position: "absolute",
    right: "15px",
  },
};

const ScreamDialog = ({ classes, screamId }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const openDialog = () => {
    setOpen(true);
  };

  const dialogMarkup = "";

  return (
    <Fragment>
      <MyButton
        tip='Expand Scream!!!'
        btnClassName={classes.buttonDialog}
        onClick={openDialog}
      >
        <UnfoldMoreIcon color='primary' />
      </MyButton>
      <Dialog open={open} onClose={closeDialog} fullWidth maxWidth='sm'>
        <DialogContent>{dialogMarkup}</DialogContent>
      </Dialog>
    </Fragment>
  );
};

const mapPropsToState = (state) => ({
  scream: state.data.scream,
  UI: state.UI,
});

const mapPropsToActions = {
  getScream,
};

ScreamDialog.propTypes = {
  UI: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  getScream: PropTypes.func.isRequired,
};

export default connect(
  mapPropsToState,
  mapPropsToActions
)(withStyles(styles)(ScreamDialog));
