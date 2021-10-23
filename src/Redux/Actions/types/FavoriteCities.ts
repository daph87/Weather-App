/** @format */

// import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { FavoriteCitiesTypes } from "../../Enums/FavoriteCitiesTypes";

export interface AddFavoriteCityAction {
  type: FavoriteCitiesTypes.ADD_FAVORITE_CITY;
  payload: any;
}

export interface DeleteFavoriteCityAction {
  type: FavoriteCitiesTypes.DELETE_FAVORITE_CITY;
  payload: any;
}

export interface SetFavoriteIconActive {
  type: FavoriteCitiesTypes.SET_FAVORITE_ICON_ACTIVE;
  payload: boolean;
}

export interface FavoriteCitiesState {
  favoriteCities: any | undefined;
  favoriteIconActive: boolean;
}

export type ActionFavoriteCities =
  | AddFavoriteCityAction
  | DeleteFavoriteCityAction
  | SetFavoriteIconActive;
