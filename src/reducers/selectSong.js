const initialState = {
  audio: null,
  index: null,
  song: {},
  listSongs: [],
  statePlay: false,
};

const selectSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUDIO": {
      return {
        ...state,
        audio: action.payload,
      };
    }
    case "SELECTSONG": {
      return {
        ...state,
        song: action.payload,
      };
    }
    case "ADD_LIST_SONGS": {
      return {
        ...state,
        listSongs: action.payload,
      };
    }
    case "SELECT_INDEX": {
      return {
        ...state,
        index: action.payload,
      };
    }
    case "SET_STATE_PLAY": {
      return {
        ...state,
        statePlay: action.payload,
      };
    }
    default:
      return state;
  }
};

export default selectSongReducer;
