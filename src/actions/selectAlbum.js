export const addSelectLink = (payload) => {
  return {
    type: "SELECT_LINK",
    payload: payload,
  };
};

export const addSelectId = (payload) => {
  return {
    type: "SELECT_ID_ALBUM",
    payload: payload,
  };
};
