/** @format */
import { Dispatch } from "redux";
import { CityData } from "../../../Types/CityDataType";

import { FavoritesCitiesTypes } from "../../Enums/favoritesCitiesTypes";
import { ActionFavoritesCities } from "../types/favoritesCities";

export const addCityToFavorites =
  (city: CityData) => (dispatch: Dispatch<ActionFavoritesCities>) => {
    dispatch({
      type: FavoritesCitiesTypes.ADD_FAVORITE_CITY,
      payload: city,
    });
  };

export const deleteCityFromFavorites =
  (id: string) => (dispatch: Dispatch<ActionFavoritesCities>) => {
    dispatch({
      type: FavoritesCitiesTypes.DELETE_FAVORITE_CITY,
      payload: id,
    });
  };
