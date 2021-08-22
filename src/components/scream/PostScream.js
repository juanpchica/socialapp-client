import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

//Mui
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";

//Icons
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

//Redux
import { connect } from "react-redux";
import { postScream, clearErrors } from "../../redux/actions/dataActions";

//My Components
import MyButton from "../../util/MyButton";

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
  const {
    classes,
    UI: { loading },
    postScream,
    clearErrors,
    screams,
  } = props;
  const errors = props.UI.errors ? props.UI.errors : {};

  //Local State
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ body: "" });

  const closeDialog = () => {
    setOpen(false);
    clearErrors();
  };
  const openDialog = () => {
    setOpen(true);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    postScream(data);
  };

  useEffect(() => {
    setOpen(false);
    setData({ body: "" });
  }, [screams]);

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
              value={data.body}
              fullWidth
              onChange={(e) => {
                setData({ body: e.target.value });
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
              {loading && (
                <CircularProgress
                  size={30}
                  className={classes.progressSpinner}
                />
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

const mapPropsToState = (state) => ({
  UI: state.UI,
  screams: state.data.screams,
});

const mapPropsToActions = {
  postScream,
  clearErrors,
};

PostScream.propTypes = {
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  postScream: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

export default connect(
  mapPropsToState,
  mapPropsToActions
)(withStyles(styles)(PostScream));
