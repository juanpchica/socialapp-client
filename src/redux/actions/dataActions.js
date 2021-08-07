import axios from "axios";
import { LIKE_SCREAM, LOADING_SCREAMS, SET_SCREAMS } from "../types";

//Fetching Screams
export const getScreams = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_SCREAMS });

    axios
      .get("/screams")
      .then((res) => {
        dispatch({ type: SET_SCREAMS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
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
