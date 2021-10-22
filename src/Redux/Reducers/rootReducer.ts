/** @format */

import { combineReducers } from "redux";
import weatherReducer from "./WeatherReducer";

const rootReducer = combineReducers({
  weatherInfo: weatherReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
