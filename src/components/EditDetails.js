import React, { Component } from "react";
import PropTypes from "prop-types";

//Mui
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

//Icons
import EditIcon from "@material-ui/icons/Edit";

//Redux
import { connect } from "react-redux";
import { editUserDetails, getUserData } from "../redux/actions/userActions";

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

  render() {
    const { classes } = this.props;
    return (
      <Tooltip title='Edit User' className={classes.button}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Tooltip>
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
