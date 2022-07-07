const initialState = {
  link: undefined,
  Id: undefined,
};

const selectAlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_LINK": {
      return {
        ...state,
        link: action.payload,
      };
    }
    case "SELECT_ID_ALBUM": {
      return {
        ...state,
        Id: action.payload,
      };
    }
    default:
      return state;
  }
};

export default selectAlbumReducer;
