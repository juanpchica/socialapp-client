import React from "react";

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

const Comments = () => {
  return <div>Comments</div>;
};

export default Comments;
