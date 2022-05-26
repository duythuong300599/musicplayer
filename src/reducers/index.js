import selectSongReducer from "./selectSong";
import setIsLoadingReducer from "./isLoading";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectSong: selectSongReducer,
  isLoading: setIsLoadingReducer,
});

export default rootReducer;
