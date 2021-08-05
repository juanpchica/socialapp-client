import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

//Redux
import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.spreadThis,
});

class Profile extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Profile.PropTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));
