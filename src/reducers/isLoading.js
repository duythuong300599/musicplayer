const initialState = {
  loading: false,
};

const setIsLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default setIsLoadingReducer;
