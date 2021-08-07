import React, { Component } from "react";
import { Fragment } from "react";
import MyButton from "../util/MyButton";

//Redux
import { connect } from "react-redux";
import { deleteScream } from "../redux/actions/dataActions";
//Mui
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

//Icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const styles = (theme) => ({
  ...theme.spreatThis,
  button: {
    float: "right",
  },
});

class DeleteButton extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Fragment>
        <MyButton tip='Delete Scream' onClick={this.handleOpen}>
          <DeleteOutlineIcon color='secondary' />
        </MyButton>

        <Dialog open={this.state.open}>
          <DialogTitle>
            Are you sure you want to delete this scream ?
          </DialogTitle>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Delete</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default connect(null, { deleteScream })(
  withStyles(styles)(DeleteButton)
);
