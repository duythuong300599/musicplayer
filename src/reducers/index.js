import selectSongReducer from "./selectSong";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectSong: selectSongReducer,
});

export default rootReducer;
