import selectSongReducer from "./selectSong";
import setIsLoadingReducer from "./isLoading";
import selectAlbumReducer from "./selectAlbum";
import { combineReducers } from "redux";
import np_localStore from "./np_localStore";

const rootReducer = combineReducers({
  selectSong: selectSongReducer,
  isLoading: setIsLoadingReducer,
  selectAlbum: selectAlbumReducer,
  npLocalStore: np_localStore,
});

export default rootReducer;
