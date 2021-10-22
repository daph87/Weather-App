/** @format */

import { combineReducers } from "redux";
import currentWeatherReducer from "./currentWeatherReducer";

const rootReducer = combineReducers({
  CurrentWeatherInfo: currentWeatherReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
