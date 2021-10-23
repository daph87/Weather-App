/** @format */
import { Dispatch } from "redux";

import { FavoritesCitiesTypes } from "../../Enums/favoritesCitiesTypes";
import { ActionFavoritesCities } from "../types/favoritesCities";

export const addCityToFavorites =
  (city: any) => (dispatch: Dispatch<ActionFavoritesCities>) => {
    console.log("I added");

    dispatch({
      type: FavoritesCitiesTypes.ADD_FAVORITE_CITY,
      payload: city,
    });
  };

export const deleteCityFromFavorites =
  (id: string) => (dispatch: Dispatch<ActionFavoritesCities>) => {
    console.log("Ideleted");
    dispatch({
      type: FavoritesCitiesTypes.DELETE_FAVORITE_CITY,
      payload: id,
    });
  };
