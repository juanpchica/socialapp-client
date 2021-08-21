import {
  LOADING_SCREAMS,
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
} from "../types";

const initialState = {
  screams: [],
  loading: false,
  scream: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload,
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
    case DELETE_SCREAM:
      const index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      return {
        ...state,
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
