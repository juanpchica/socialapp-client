import React, { Component } from "react";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../redux/actions/dataActions";
import MyButton from "../util/MyButton";

// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

class LikeButton extends Component {
  render() {
    const {
      user: { authenticated, likes },
    } = this.props;

    //const buttonMarkup = (authenticated)? :

    return (
      <div>
        <MyButton tip='Like'>
          <FavoriteBorder color='primary' />
        </MyButton>
        <MyButton tip='Undo like'>
          <FavoriteIcon color='primary' />
        </MyButton>
      </div>
    );
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
