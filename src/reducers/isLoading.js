const initialState = {
  loading: false,
  playing: false,
};

const setIsLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_IS_PLAYING":
      return {
        ...state,
        playing: action.payload,
      };
    default:
      return state;
  }
};

export default setIsLoadingReducer;
