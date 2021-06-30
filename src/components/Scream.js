import React from "react";

/* Material UI*/
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex",
  },
};

const Scream = (props) => {
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
    <Card>
      <CardActionArea>
        <CardMedia image={userImage} title='Profile Image' />
        <CardContent>
          <Typography variant='h5'>{userHandle}</Typography>
          <Typography variant='body2' color='textSecondary'>
            {createdAt}
          </Typography>
          <Typography variant='body1'>{body}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(Scream);
