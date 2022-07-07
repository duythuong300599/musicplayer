const initialState = {
  dataHome: [],
  isLoadingHome: false,
};

const loadDataHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA_HOME": {
      return {
        ...state,
        dataHome: action.payload,
      };
    }
    case "SET_LOADING_DATA_HOME": {
      return {
        ...state,
        isLoadingHome: action.payload,
      };
    }
    default:
      return state;
  }
};

export default loadDataHomeReducer;
