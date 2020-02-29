import { combineReducers } from "redux";
import {
  SONG_SELECTED_TYPE,
  SONG_FILTER_TYPE,
  SET_SEARCH_TERM_TYPE
} from "../actions";

const SONGS = [
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:30" },
  { title: "All Star", duration: "3:15" },
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:30" },
  { title: "All Star", duration: "3:15" },
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:30" },
  { title: "All Star", duration: "3:15" },
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:30" },
  { title: "All Star", duration: "3:15" },
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:30" },
  { title: "All Star", duration: "3:15" },
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:30" },
  { title: "All Star", duration: "3:15" },
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:30" },
  { title: "All Star", duration: "3:15" },
  { title: "I Want it That Way", duration: "1:45" }
];

const songsReducer = (songs = SONGS, action) => {
  if (action.type === SONG_FILTER_TYPE && action.payload !== "") {
    songs = SONGS.filter(song => song.title.indexOf(action.payload) >= 0);
    return songs;
  }
  return SONGS;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === SONG_SELECTED_TYPE) {
    return action.payload;
  }

  return selectedSong;
};

const simpleReducer = (selectedSong = null, action) => {
  if (action.type === SET_SEARCH_TERM_TYPE) {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  setQueryString: simpleReducer,
  songList: songsReducer,
  selectedSong: selectedSongReducer
});
