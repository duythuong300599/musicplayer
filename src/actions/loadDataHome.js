export const loadDataHome = (payload) => {
  return {
    type: "ADD_DATA_HOME",
    payload: payload,
  };
};

export const setLoadHome = (payload) => {
  return {
    type: "SET_LOADING_DATA_HOME",
    payload: payload,
  };
};
