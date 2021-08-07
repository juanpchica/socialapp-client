import axios from "axios";
import { LOADING_SCREAMS, SET_SCREAMS } from "../types";

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
