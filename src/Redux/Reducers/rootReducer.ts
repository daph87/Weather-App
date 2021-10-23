/** @format */

import { combineReducers } from "redux";
import favoritesCitiesReducer from "./favoritesCitiesReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  weatherInfo: weatherReducer,
  favoritesCitiesInfo: favoritesCitiesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
