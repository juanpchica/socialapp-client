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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
