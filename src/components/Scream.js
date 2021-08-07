import React from "react";

/* Material UI*/
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";

// Redux
import { connect } from "react-redux";

const styles = {
  card: {
    display: "flex",
    marginBottom: 15,
  },
  image: {
    minWidth: 200,
    objectFit: "cover",
  },
  content: {
    padding: 25,
  },
  contentButton: {
    display: "flex",
    alignItems: "center",
  },
};

const Scream = (props) => {
  dayjs.extend(relativeTime);

  const {
    classes,
    scream: {
      body,
      createdAt,
      userImage,
      userHandle,
      screamId,
      likeCount,
      commentCount,
    },
  } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        image={userImage}
        title='Profile Image'
        className={classes.image}
      />
      <CardContent className={classes.content}>
        <Typography
          variant='h5'
          component={Link}
          to={`/users/${userHandle}`}
          color='primary'
        >
          {userHandle}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {dayjs(createdAt).fromNow()}
        </Typography>
        <Typography variant='body1'>{body}</Typography>
        <Typography variant='body1'>{screamId}</Typography>
        <div className={classes.contentButton}>
          <button>
            <FavoriteIcon color='primary' />
          </button>
          {likeCount} Likes
        </div>
      </CardContent>
    </Card>
  );
};

const mapPropsToState = function (state) {
  return {
    user: state.user,
  };
};

export default connect(mapPropsToState, {})(withStyles(styles)(Scream));
