export const addSelectSong = (payload) => {
  return {
    type: "SELECT_SONG",
    payload: payload,
  };
};

export const addSelectSrc = (payload) => {
  return {
    type: "ADD_SRC",
    payload: payload,
  };
};

export const setCurrentTime = (payload) => {
  return {
    type: "SET_CURRENT_TIME",
    payload: payload,
  };
};

export const setVolume = (payload) => {
  return {
    type: "SET_VOLUME",
    payload: payload,
  };
};

export const setIsPlaying = (payload) => {
  return {
    type: "SET_IS_PLAYING",
    payload: payload,
  };
};
