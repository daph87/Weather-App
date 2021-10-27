/** @format */

import { CityData } from "../../../Types/CityDataType";
import { FavoritesCitiesTypes } from "../../Enums/favoritesCitiesTypes";

export interface AddFavoriteCityAction {
  type: FavoritesCitiesTypes.ADD_FAVORITE_CITY;
  payload: CityData;
}

export interface DeleteFavoriteCityAction {
  type: FavoritesCitiesTypes.DELETE_FAVORITE_CITY;
  payload: string;
}

export interface FavoritesCitiesState {
  favoritesCities: CityData[];
}

export type ActionFavoritesCities =
  | AddFavoriteCityAction
  | DeleteFavoriteCityAction;
