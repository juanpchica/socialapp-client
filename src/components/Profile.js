import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//Redux
import { connect } from "react-redux";

//Mui
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
                  <LocationOnIcon color='primary'>
                    <span>{location}</span>
                  </LocationOnIcon>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <LinkIcon>
                    <a href={website} target='_blank' rel='noopener noreferrer'>
                      {" "}
                      {website}
                    </a>
                  </LinkIcon>
                </Fragment>
              )}
              <CalendarToday color='primary' />{" "}
              <span>Joined {dayjs(createdAt).format("MMM YYYY")} </span>
            </div>
          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Typography variant='body2' align='center'>
            No profile found, please login again
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to='/login'
            >
              Login
            </Button>
            <Button
              variant='contained'
              color='secondary'
              component={Link}
              to='/signup'
            >
              Signup
            </Button>
          </div>
        </Paper>
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
