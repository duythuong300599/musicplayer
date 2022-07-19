const initialState = {
  song: [],
  src: "",
  currentTime: null,
  volume: 100,
  isPlaying: false,
};

const np_localStore = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SONG": {
      return {
        ...state,
        song: action.payload,
      };
    }
    case "ADD_SRC": {
      return {
        ...state,
        src: action.payload,
      };
    }
    case "SET_CURRENT_TIME": {
      return {
        ...state,
        currentTime: action.payload,
      };
    }
    case "SET_VOLUME": {
      return {
        ...state,
        volume: action.payload,
      };
    }
    case "SET_IS_PLAYING": {
      return {
        ...state,
        isPlaying: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default np_localStore;
