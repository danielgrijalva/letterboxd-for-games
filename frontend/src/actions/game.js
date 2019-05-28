import axios from "axios";
import {
  LOG_GAME,
  LIKE_GAME,
  LOAD_ACTIONS,
  ADD_TO_BACKLOG,
  ADD_TO_WISHLIST,
  LOAD_RATING,
  RATE_GAME,
  ACTIONS_LOADING,
  RATING_LOADING
} from "./types";
import { tokenConfig } from "./auth";

export const loadActions = (gameId, name) => (dispatch, getState) => {
  dispatch({ type: ACTIONS_LOADING });
  axios
    .get(`/api/actions/`, {
      params: {
        gb: gameId,
        name: name
      },
      headers: tokenConfig(getState).headers
    })
    .then(res => {
      dispatch({
        type: LOAD_ACTIONS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const logGame = (gameId, name) => (dispatch, getState) => {
  axios
    .post(
      "/api/actions/log/",
      {
        gb: gameId,
        name: name
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: LOG_GAME,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const likeGame = (gameId, name) => (dispatch, getState) => {
  axios
    .post(
      "/api/actions/like/",
      {
        gb: gameId,
        name: name
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: LIKE_GAME,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const addToBacklog = (gameId, name) => (dispatch, getState) => {
  axios
    .post(
      "/api/actions/backlog/",
      {
        gb: gameId,
        name: name
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ADD_TO_BACKLOG,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const addToWishlist = (gameId, name) => (dispatch, getState) => {
  axios
    .post(
      "/api/actions/wishlist/",
      {
        gb: gameId,
        name: name
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const loadRating = gameId => (dispatch, getState) => {
  dispatch({ type: RATING_LOADING });
  axios
    .get(`/api/actions/ratings`, {
      params: {
        game: gameId
      },
      headers: tokenConfig(getState).headers
    })
    .then(res => {
      dispatch({
        type: LOAD_RATING,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const rate = (gameId, rating) => (dispatch, getState) => {
  axios
    .post(
      "/api/actions/ratings/",
      {
        game: gameId,
        rating: rating
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: RATE_GAME,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
