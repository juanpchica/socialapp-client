import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//Redux
import { connect } from "react-redux";
import { uploadImage } from "../redux/actions/userActions";

//Mui
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

//Icons
import CalendarToday from "@material-ui/icons/CalendarToday";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import EditIcon from "@material-ui/icons/Edit";

import { Fragment } from "react";

const styles = (theme) => ({
  ...theme.spreadThis,
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.inputFileRef = React.createRef();
  }

  handleImageChange(event) {
    console.log(this);
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);

    //Send image with redux
    this.props.uploadImage(formData);
  }

  handleEditPicture = () => {
    this.inputFileRef.current.click();
  };

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
            {imageUrl && (
              <div className='image-wrapper'>
                <img src={imageUrl} className='profile-image' alt='Profile' />
                <input
                  type='file'
                  id='imageInput'
                  hidden='hidden'
                  ref={this.inputFileRef}
                  onChange={this.handleImageChange}
                />
                <Tooltip title='Edit Profile picture' placement='top'>
                  <IconButton
                    onClick={this.handleEditPicture}
                    className='button'
                  >
                    <EditIcon color='primary' />
                  </IconButton>
                </Tooltip>
              </div>
            )}
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
  uploadImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { uploadImage })(
  withStyles(styles)(Profile)
);
