/** @format */

import { combineReducers } from "redux";
import favoriteCitiesReducer from "./favoriteCitiesReducer";
import weatherReducer from "./WeatherReducer";

const rootReducer = combineReducers({
  weatherInfo: weatherReducer,
  favoriteCities: favoriteCitiesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
