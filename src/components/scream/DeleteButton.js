import React, { Component } from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";

import MyButton from "../../util/MyButton";

//Redux
import { connect } from "react-redux";
import { deleteScream } from "../../redux/actions/dataActions";
//Mui
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

//Icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const styles = (theme) => ({
  ...theme.spreatThis,
  deleteButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});

class DeleteButton extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = () => {
    this.props.deleteScream(this.props.screamId);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MyButton
          tip='Delete Scream'
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutlineIcon color='secondary' />
        </MyButton>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle>
            Are you sure you want to delete this scream ?
          </DialogTitle>
          <DialogActions>
            <Button color='primary' onClick={this.handleClose}>
              Cancel
            </Button>
            <Button color='secondary' onClick={this.handleDelete}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeleteButton.propTypes = {
  deleteScream: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
};

export default connect(null, { deleteScream })(
  withStyles(styles)(DeleteButton)
);
