import axios from "axios";
import {
  LIKE_SCREAM,
  LOADING_SCREAMS,
  SET_SCREAMS,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
  LOADING_UI,
  SET_ERRORS,
  POST_SCREAM,
  CLEAR_ERRORS,
  SET_SCREAM,
} from "../types";

//Fetching Screams
export const getScreams = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_SCREAMS });

    axios
      .get("/screams")
      .then((res) => {
        dispatch({ type: SET_SCREAMS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SET_SCREAMS,
          payload: [],
        });
      });
  };
};

// Getting only one scream
export const getScream = (screamId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/scream/${screamId}`)
    .then((res) => {
      dispatch({ type: SET_SCREAM, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

//Post a new Scream
export const postScream = (newScream) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/scream", newScream)
    .then((res) => {
      dispatch({ type: POST_SCREAM, payload: res.data });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

//Liking a scream
export const likeScream = (screamId) => (dispatch) => {
  axios
    .get(`/scream/${screamId}/like`)
    .then(({ data }) => {
      dispatch({ type: LIKE_SCREAM, payload: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Unlike a scream
export const unlikeScream = (screamId) => (dispatch) => {
  axios
    .get(`/scream/${screamId}/unlike`)
    .then(({ data }) => {
      dispatch({ type: UNLIKE_SCREAM, payload: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteScream = (screamId) => (dispatch) => {
  axios
    .delete(`/scream/${screamId}`)
    .then((res) => {
      dispatch({ type: DELETE_SCREAM, payload: screamId });
    })
    .catch((err) => console.log(err));
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
