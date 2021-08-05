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
    const {
      classes,
      user: {
        authenticated,
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading
      },
    } = this.props;

    let profileMarkup = !loading ?( authenticated ? (
        <Paper></Paper>
    ):()):(<p>Loading...</p>);

    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));
