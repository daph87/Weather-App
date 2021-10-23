/** @format */

import { FavoritesCitiesTypes } from "../Enums/favoritesCitiesTypes";
import { REHYDRATE } from "redux-persist";
import {
  FavoritesCitiesState,
  ActionFavoritesCities,
} from "../Actions/types/favoritesCities";

const initialState: FavoritesCitiesState = {
  favoritesCities: [],
};
export default (
  state = initialState,
  action: ActionFavoritesCities
): FavoritesCitiesState => {
  switch (action.type) {
    case FavoritesCitiesTypes.ADD_FAVORITE_CITY:
      return {
        ...state,
        favoritesCities: [...state.favoritesCities, action.payload],
        // favoritesCities: action.payload,
      };

    case FavoritesCitiesTypes.DELETE_FAVORITE_CITY:
      return {
        ...state,
        favoritesCities: state.favoritesCities.filter(
          (fav: any) => fav.Key !== action.payload
        ),
      };

    default:
      return state;
  }
};
