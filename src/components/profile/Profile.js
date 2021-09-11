import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//Redux
import { connect } from "react-redux";
import { uploadImage, logoutUser } from "../../redux/actions/userActions";

//Mui
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//Icons
import CalendarToday from "@material-ui/icons/CalendarToday";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { Fragment } from "react";

//Components
import EditDetails from "./EditDetails";
import MyButton from "../../util/MyButton";

const styles = (theme) => ({
  
  
  ...theme.spreadThis,
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  handleLogout() {
    this.props.logoutUser();
  }

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
                <MyButton
                  onClick={this.handleEditPicture}
                  tip='Edit Profile picture'
                  btnClassName='button'
                >
                  <EditIcon color='primary' />
                </MyButton>
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
                  <LocationOnIcon color='primary' />
                  <span>{location}</span>

                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <LinkIcon />
                  <a href={website} target='_blank' rel='noopener noreferrer'>
                    {" "}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <CalendarToday color='primary' />{" "}
              <span>Joined {dayjs(createdAt).format("MMM YYYY")} </span>
            </div>
            <MyButton onClick={this.handleLogout} tip='Logout'>
              <KeyboardReturnIcon color='primary' />
            </MyButton>
            <EditDetails />
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
  logoutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { uploadImage, logoutUser })(
  withStyles(styles)(Profile)
);
