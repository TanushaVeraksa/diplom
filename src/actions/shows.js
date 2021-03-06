import { GET_SHOW, GET_SHOWS, SET_SHOW, SET_SHOWS, SET_SEARCHED_SHOWS} from "../constants/shows";

export const getShow = (id) => ({
  type: GET_SHOW,
  payload: id,
});

export const getShows = (page) => ({
    type: GET_SHOWS,
    payload: page,
  });

export const setShow = (show) => ({
  type: SET_SHOW,
  payload: show,
});

export const setSearchedShows = (show) => ({
  type: SET_SEARCHED_SHOWS,
  payload: show,
});

export const setShows = (shows) => ({
    type: SET_SHOWS,
    payload: shows,
  });

