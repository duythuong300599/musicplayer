export const addAudioElement = (payload) => {
  return {
    type: "ADD_AUDIO",
    payload: payload,
  };
};

export const addSelectSrc = (payload) => {
  return {
    type: "ADD_SRC",
    payload: payload,
  };
};

export const addSelectIndex = (payload) => {
  return {
    type: "SELECT_INDEX",
    payload: payload,
  };
};

export const addSelectSong = (payload) => {
  return {
    type: "SELECTSONG",
    payload: payload,
  };
};

export const addListSongs = (payload) => {
  return {
    type: "ADD_LIST_SONGS",
    payload: payload,
  };
};

export const addQueueListSongs = (payload) => {
  return {
    type: "ADD_QUEUE_LIST_SONGS",
    payload: payload,
  };
};

export const addZingChart = (payload) => {
  return {
    type: "ADD_ZING_CHART",
    payload: payload,
  };
};

export const setStatePlay = (payload) => {
  return {
    type: "SET_STATE_PLAY",
    payload: payload,
  };
};
