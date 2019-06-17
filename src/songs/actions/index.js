// Action creator

export const SONG_SELECTED_TYPE = "SONG_SELECTED";
export const SONG_FILTER_TYPE = "SONG_FILTER";
export const SET_SEARCH_TERM_TYPE = "SET_SEARCH_TERM";

export const selectSong = song => {
  return {
    type: SONG_SELECTED_TYPE,
    payload: song
  };
};

export const filterSongs = queryString => {
  return {
    type: SONG_FILTER_TYPE,
    payload: queryString
  };
};

export const setQueryString = queryString => {
  return {
    type: SET_SEARCH_TERM_TYPE,
    payload: queryString
  };
};
