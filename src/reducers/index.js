import selectSongReducer from "./selectSong";
import setIsLoadingReducer from "./isLoading";
import loadDataHomeReducer from "./loadDataHome";
import selectAlbumReducer from "./selectAlbum";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectSong: selectSongReducer,
  isLoading: setIsLoadingReducer,
  loadHome: loadDataHomeReducer,
  selectAlbum: selectAlbumReducer,
});

export default rootReducer;
