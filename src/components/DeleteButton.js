import React, { Component } from "react";
import { Fragment } from "react";
import MyButton from "../util/MyButton";

//Redux
import { connect } from "react-redux";

//Mui
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

//Icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const styles = (theme) => ({
  ...theme.spreatThis,
  button: {
    float: "right",
  },
});

class DeleteButton extends Component {
  render() {
    return (
      <Fragment>
        <MyButton tip='Delete Scream' onClick={this.handleOpen}></MyButton>
      </Fragment>
    );
  }
}

export default connect(null, { deleteScream })(
  withStyles(styles)(DeleteButton)
);
