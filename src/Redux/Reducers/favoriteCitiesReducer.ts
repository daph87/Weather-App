/** @format */

import { FavoriteCitiesTypes } from "../Enums/FavoriteCitiesTypes";
import { REHYDRATE } from "redux-persist";
import {
  FavoriteCitiesState,
  ActionFavoriteCities,
} from "../Actions/types/FavoriteCities";

const initialState: FavoriteCitiesState = {
  favoriteCities: [],
  favoriteIconActive: false,
};
export default (
  state = initialState,
  action: ActionFavoriteCities
): FavoriteCitiesState => {
  switch (action.type) {
    case FavoriteCitiesTypes.ADD_FAVORITE_CITY:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };

    case FavoriteCitiesTypes.DELETE_FAVORITE_CITY:
      return {
        ...state,
        favoriteCities: action.payload,
      };

    case FavoriteCitiesTypes.SET_FAVORITE_ICON_ACTIVE:
      return {
        ...state,
        favoriteIconActive: action.payload,
      };
    default:
      return state;
  }
};
