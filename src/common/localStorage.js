const setDataOnLocalStorage = (keyLocal, keyItem, value) => {
  var Array = JSON.parse(localStorage.getItem(keyLocal)) || [];
  var newArray = {
    ...Array,
    [keyItem]: value,
  };
  localStorage.setItem(keyLocal, JSON.stringify(newArray));
};

export default setDataOnLocalStorage;
