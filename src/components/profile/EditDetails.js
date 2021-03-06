import React, { Component } from "react";
import PropTypes from "prop-types";

//Mui
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

//Icons
import EditIcon from "@material-ui/icons/Edit";

//Redux
import { connect } from "react-redux";
import { editUserDetails, getUserData } from "../../redux/actions/userActions";
import { Fragment } from "react";

//Components
import MyButton from "../../util/MyButton";

const styles = (theme) => ({
  ...theme.spreatThis,
  button: {
    float: "right",
  },
});

class EditDetails extends Component {
  state = {
    bio: "",
    website: "",
    location: "",
    open: false,
  };

  componentDidMount() {
    const { credentials } = this.props;
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : "",
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location,
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip='Edit User'
          tipClassName={classes.button}
        >
          <EditIcon color='primary' />
        </MyButton>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth='sm'
        >
          <DialogContent>
            <form>
              <TextField
                name='bio'
                type='text'
                label='Bio'
                multiline
                rows='3'
                placeholder='A short bio about yourself'
                className={classes.textField}
                value={this.state.bio}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name='website'
                tpye='text'
                label='Website'
                placeholder='Your personal/professinal website'
                className={classes.textField}
                value={this.state.website}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name='location'
                tpye='text'
                label='Location'
                placeholder='Where you live'
                className={classes.textField}
                value={this.state.location}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color='primary'>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapPropsToState = (state) => ({
  credentials: state.user.credentials,
});

const mapPropsToActions = {
  editUserDetails,
  getUserData,
};

EditDetails.propTypes = {
  credentials: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  editUserDetails: PropTypes.func.isRequired,
  getUserData: PropTypes.func.isRequired,
};

export default connect(
  mapPropsToState,
  mapPropsToActions
)(withStyles(styles)(EditDetails));
