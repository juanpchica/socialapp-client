import React, { Component } from "react";

//Mui
import withStyles from "@material-ui/core/styles/withStyles";

//Redux
import { connect } from "react-redux";
import { editUserDetails, getUserData } from "../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.spreatThis,
});

class EditDetails extends Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.container}>hello</div>;
  }
}

const mapPropsToState = (state) => ({
  credentials: state.user.credentials,
});

const mapPropsToActions = {
  editUserDetails,
  getUserData,
};

export default connect(
  mapPropsToState,
  mapPropsToActions
)(withStyles(styles)(EditDetails));
