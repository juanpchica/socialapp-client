import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const styles = (theme) => ({
  ...theme.spreatThis,
  commentImage: {
    maxWidth: "100%",
    height: 100,
    objectFit: "cover",
    borderRadius: "50%",
  },
  commentData: {
    marginLeft: 20,
  },
});

const Comments = ({ comments, classes }) => {
  return <div>Comments</div>;
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comments;
