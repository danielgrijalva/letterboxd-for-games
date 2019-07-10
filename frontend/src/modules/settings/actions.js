import axios from "axios";
import { LOAD_FAVORITES } from "../profile/actionTypes";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes";
import { tokenConfig } from "../app/actions";

export const addFavorite = game => (dispatch, getState) => {
  axios
    .post(
      "/api/actions/favorites/add/",
      {
        igdb: game.id,
        name: game.name,
        slug: game.slug,
        cover_id: game.cover.image_id
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ADD_FAVORITE,
        payload: res.data
      });
      dispatch(loadFavorites());
    })
    .catch(error => {
      console.log(error);
    });
};

export const removeFavorite = game => (dispatch, getState) => {
  axios
    .post(
      "/api/actions/favorites/remove/",
      {
        igdb: game.igdb,
        name: game.name,
        slug: game.slug,
        cover_id: game.cover_id
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: REMOVE_FAVORITE,
        payload: res.data
      });
      dispatch(loadFavorites());
    })
    .catch(error => {
      console.log(error);
    });
};

export const loadFavorites = () => (dispatch, getState) => {
  axios
    .get("/api/actions/favorites/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOAD_FAVORITES,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
