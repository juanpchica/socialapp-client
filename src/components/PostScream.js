import React, { Fragment } from "react";

//Mui
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

//Icons
import AddIcon from "@material-ui/icons/Add";

//Redux
import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.spreatThis,
});

const PostScream = () => {
  return (
    <Fragment>
      <MyButton tip='Post a Scream!'>
        <AddIcon />
      </MyButton>
    </Fragment>
  );
};

const mapPropsToState = (state) => ({
  UI: state.UI,
});

const mapPropsToActions = {
  postScream,
};

export default connect(
  mapPropsToState,
  mapPropsToActions
)(withStyles(styles)(PostScream));
