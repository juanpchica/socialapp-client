import { LOADING_SCREAMS, SET_SCREAMS } from "../types";

const initialState = {
  screams: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case LOADING_SCREAMS:
      return {
        ...state,
        loading: true,
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      const indexScream = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[indexScream] = action.payload;

      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
