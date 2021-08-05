import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";

//Mui
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Fragment } from "react";

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
        loading,
      },
    } = this.props;

    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className='profile-image'>
              <img src={imageUrl} alt='Profile' />
            </div>
            <hr />
            <div className='profile-details'>
              <MuiLink
                component={Link}
                to={`/users/${handle}`}
                color='primary'
                variant='h5'
              >
                @{handle}
              </MuiLink>
              <hr />

              {bio && <Typography variant='body2'>{bio}</Typography>}
              <hr />
              {location && (
                <Fragment>
                  <LocationOn color='primary'>
                    <span>{location}</span>
                  </LocationOn>
                  <hr />
                </Fragment>
              )}
            </div>
          </div>
        </Paper>
      ) : (
        ""
      )
    ) : (
      <p>Loading...</p>
    );

    return profileMarkup;
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
