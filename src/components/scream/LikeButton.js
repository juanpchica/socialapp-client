import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../../redux/actions/dataActions";
import MyButton from "../../util/MyButton";

// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

class LikeButton extends Component {
  handleUnlike = () => {
    this.props.unlikeScream(this.props.screamId);
  };

  handleLike = () => {
    this.props.likeScream(this.props.screamId);
  };

  render() {
    const {
      user: { authenticated, likes },
      screamId,
    } = this.props;

    const hasUserLiked =
      likes && likes.find((like) => screamId === like.screamId);
    const buttonMarkup = authenticated ? (
      hasUserLiked ? (
        <MyButton tip='Undo like' onClick={this.handleUnlike}>
          <FavoriteIcon color='primary' />
        </MyButton>
      ) : (
        <MyButton tip='Like' onClick={this.handleLike}>
          <FavoriteBorder color='primary' />
        </MyButton>
      )
    ) : (
      <Link to='/login'>
        <MyButton tip='Like'>
          <FavoriteBorder color='primary' />
        </MyButton>
      </Link>
    );

    return buttonMarkup;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired,
};

const mapPropsToState = (state) => {
  return {
    user: state.user,
  };
};

const mapPropsToActions = {
  likeScream,
  unlikeScream,
};

export default connect(mapPropsToState, mapPropsToActions)(LikeButton);
