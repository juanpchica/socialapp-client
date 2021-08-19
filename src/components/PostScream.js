import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

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
import { postScream } from "../redux/actions/dataActions";

//My Components
import MyButton from "../util/MyButton";

const styles = (theme) => ({
  ...theme.spreatThis,
});

const PostScream = () => {
  //Local State
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState("");
  const closeDialog = () => {
    setOpen(false);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <Fragment>
      <MyButton
        tip='Post a Scream! test'
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon />
      </MyButton>
      <Dialog open={open} onClose={closeDialog}>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

const mapPropsToState = (state) => ({
  UI: state.UI,
});

const mapPropsToActions = {
  postScream,
};

PostScream.propTypes = {
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  postScream: PropTypes.func.isRequired,
};

export default connect(
  mapPropsToState,
  mapPropsToActions
)(withStyles(styles)(PostScream));
