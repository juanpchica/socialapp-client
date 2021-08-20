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
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: 10,
  },
  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    top: "6%",
  },
});

const PostScream = (props) => {
  console.log(props);

  //Local State
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});

  const closeDialog = () => {
    setOpen(false);
  };
  const openDialog = () => {
    setOpen(true);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    postScream(body);
  };

  return (
    <Fragment>
      <MyButton tip='Post a Scream! test' onClick={openDialog}>
        <AddIcon />
      </MyButton>
      <Dialog open={open} onClose={closeDialog} fullWidth maxWidth='sm'>
        <MyButton
          tip='Close'
          onClick={closeDialog}
          tipClassName={classes.closeButton}
        >
          <CloseIcon />
        </MyButton>
        <DialogTitle>Post a new scream</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              name='body'
              label='SCREAM!!'
              multiline
              rows='3'
              placeholder='Scream at your fellow apes'
              error={errors.body ? true : false}
              helperText={errors.body}
              className={classes.textField}
              value={body}
              fullWidth
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
            <Button
              type='submit'
              variant='contained'
              className={classes.submitButton}
              color='primary'
              disabled={loading}
            >
              Submit
            </Button>
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
