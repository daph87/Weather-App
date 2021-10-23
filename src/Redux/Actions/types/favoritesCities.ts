/** @format */

// import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { FavoritesCitiesTypes } from "../../Enums/favoritesCitiesTypes";

export interface AddFavoriteCityAction {
  type: FavoritesCitiesTypes.ADD_FAVORITE_CITY;
  payload: any;
}

export interface DeleteFavoriteCityAction {
  type: FavoritesCitiesTypes.DELETE_FAVORITE_CITY;
  payload: any;
}

export interface FavoritesCitiesState {
  favoritesCities: any | undefined;
}

export type ActionFavoritesCities =
  | AddFavoriteCityAction
  | DeleteFavoriteCityAction;
