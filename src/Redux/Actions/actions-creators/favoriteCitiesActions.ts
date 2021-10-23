/** @format */
import { Dispatch } from "redux";

import { FavoriteCitiesTypes } from "../../Enums/FavoriteCitiesTypes";
import { ActionFavoriteCities } from "../types/FavoriteCities";

export const addFavoriteCity =
  (city: any) => (dispatch: Dispatch<ActionFavoriteCities>) => {
    dispatch({
      type: FavoriteCitiesTypes.ADD_FAVORITE_CITY,
      payload: city,
    });
  };

export const deleteFavoriteCity =
  (id: string) => (dispatch: Dispatch<ActionFavoriteCities>) => {
    dispatch({
      type: FavoriteCitiesTypes.DELETE_FAVORITE_CITY,
      payload: id,
    });
  };

export const setFavoriteIconActive =
  (value: boolean) => (dispatch: Dispatch<ActionFavoriteCities>) => {
    dispatch({
      type: FavoriteCitiesTypes.SET_FAVORITE_ICON_ACTIVE,
      payload: value,
    });
  };
