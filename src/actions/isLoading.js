export const setIsLoading = (payload) => {
  return {
    type: "SET_IS_LOADING",
    payload: payload,
  };
};

export const setIsPlaying = (payload) => {
  return {
    type: "SET_IS_PLAYING",
    payload: payload,
  };
};
